import { useState } from 'react';
import { ShoppingCart, Heart, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: 'Spring Rose Bouquet', price: 45, category: 'Bouquets', featured: true },
    { id: 2, name: 'Sunflower Arrangement', price: 35, category: 'Bouquets' },
    { id: 3, name: 'Tulip Vase', price: 55, category: 'Vases' },
    { id: 4, name: 'Lily Centerpiece', price: 65, category: 'Centerpieces', featured: true },
  ];

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-teal-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif text-teal-700">Blooming Bliss</h1>
          <div className="hidden md:flex space-x-8 text-gray-600">
            <a href="#home" className="hover:text-teal-600 transition-colors">Home</a>
            <a href="#shop" className="hover:text-teal-600 transition-colors">Shop</a>
            <a href="#about" className="hover:text-teal-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-teal-600 transition-colors">Contact</a>
          </div>
          <div className="relative">
            <ShoppingCart className="text-gray-600" size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-green-50" />
        <div className="max-w-6xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 bg-teal-100 text-teal-700">🌸 Fresh Daily Arrivals</Badge>
            <h2 className="text-5xl md:text-6xl font-serif text-teal-800 mb-6">
              Fresh Flowers Delivered to Your Door
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Hand-picked blooms, arranged with love. Order today and brighten someone's day.
            </p>
            <div className="flex gap-4">
              <a href="#shop">
                <Button className="bg-teal-600 hover:bg-teal-700">Shop Now</Button>
              </a>
              <a href="#contact">
                <Button variant="outline">Customize Order</Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-200 to-green-200 rounded-lg aspect-square flex items-center justify-center">
              <Heart className="text-teal-600 w-32 h-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-teal-800 mb-4">Shop Our Collection</h2>
            <p className="text-gray-600">Seasonal arrangements and custom bouquets</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="bg-gradient-to-br from-teal-100 to-green-100 aspect-square flex items-center justify-center">
                    <Heart className="text-teal-500 w-16 h-16" />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  {product.featured && <Badge className="mb-2 bg-yellow-100 text-yellow-700">⭐ Featured</Badge>}
                  <p className="text-sm text-teal-600 mb-2">{product.category}</p>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${product.price}</span>
                    <Button size="sm" onClick={addToCart}>
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-teal-800 mb-4">Our Story</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Fresh Daily', desc: 'Delivered straight from local farms every morning' },
              { title: 'Handcrafted', desc: 'Each arrangement made with care by expert florists' },
              { title: 'Sustainable', desc: 'Eco-friendly packaging and compostable materials' },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="bg-teal-50 rounded-full h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-teal-800 mb-4">Get In Touch</h2>
            <p className="text-gray-600">Have questions? We'd love to hear from you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-teal-600" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-teal-600" />
                <span>hello@bloomingbliss.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-teal-600" />
                <span>123 Flower Lane, Petal City</span>
              </div>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Input id="message" placeholder="How can we help?" />
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Blooming Bliss. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
