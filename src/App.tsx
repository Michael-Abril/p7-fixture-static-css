import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Empty } from '@/components/ui/empty';
import { PlaceholderImage } from '@/components/ui/placeholder-image';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

export default function GuestbookApp() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Fetch entries from the backend
  useEffect(() => {
    fetchEntries();
  }, []);
  
  const fetchEntries = async () => {
    try {
      const response = await fetch('/api/entries');
      if (response.ok) {
        const data = await response.json();
        setEntries(data);
      }
    } catch (error) {
      console.error('Error fetching entries:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) return;
    
    try {
      const response = await fetch('/api/entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      });
      
      if (response.ok) {
        setName('');
        setMessage('');
        fetchEntries(); // Refresh the list
      }
    } catch (error) {
      console.error('Error submitting entry:', error);
    }
  };
  
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading mb-4">Guestbook</h1>
          <p className="text-lg text-muted-foreground max-w-prose mx-auto">
            Leave a message for others to see. All messages are stored securely in our database.
          </p>
        </div>
        
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Add Your Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Your name" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  placeholder="Leave your message here..." 
                  rows={4} 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">
                Submit Message
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold font-heading mb-4">Messages</h2>
          
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : entries.length === 0 ? (
            <Empty 
              title="No messages yet" 
              description="Be the first to leave a message!"
            />
          ) : (
            <div className="space-y-6">
              {entries.map((entry) => (
                <Card key={entry.id}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <PlaceholderImage 
                          label={entry.name.charAt(0).toUpperCase()} 
                          className="rounded-full w-12 h-12 flex items-center justify-center"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-lg">{entry.name}</h3>
                          <span className="text-sm text-muted-foreground">
                            {new Date(entry.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="mt-2 text-foreground">{entry.message}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}