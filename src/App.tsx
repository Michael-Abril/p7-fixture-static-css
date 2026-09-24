import { useState } from 'react';
import { ShoppingCart, Phone, Heart, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function App() {
  const [email, setEmail] = useState('');
  const [cart, setCart] = useState(0);

  const products = [
    { id: 1, name: 'Spring Bouquet', price: 45, image: '🌸', tag: 'Bestseller' },
    { id: 2, name: 'Tropical Mix', price: 55, image: '🌺', tag: 'New' },
    { id: 3, name: 'Rose Arrangement', price: 65, image: '🌹', tag: '' },
    { id: 4, name: 'Wildflower Bundle', price: 40, image: '🌼', tag: '' },
    { id: 5, name: 'Orchid Display', price: 75, image: '🌺', tag: 'Premium' },
    { id: 6, name: 'Sunflower Joy', price: 35, image: '���', tag: '' },
  ];

  const testimonials = [
    { name: 'Sarah M.', text: 'Beautiful flowers that lasted weeks!', rating: 5 },
    { name: 'James R.', text: 'Perfect for anniversaries. Highly recommend!', rating: 5 },
    { name: 'Emily K.', text: 'Fast delivery and lovely arrangements.', rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-pink-500" />
            <span className="font-bold text-xl">Bloom & Petal</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#products" className="text-sm font-medium hover:text-pink-500">Shop</a>
            <a href="#about" className="text-sm font-medium hover:text-pink-500">About</a>
            <a href="#reviews" className="text-sm font-medium hover:text-pink-500">Reviews</a>
            <a href="#contact" className="text-sm font-medium hover:text-pink-500">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setCart(cart + 1)}>
              <ShoppingCart className="h-5 w-5" />
              {cart > 0 && <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">{cart}</Badge>}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
          Fresh Flowers, Delivered with Love
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Handcrafted bouquets and arrangements for every occasion. Locally sourced, beautifully arranged, and delivered to your doorstep.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#products">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
              Shop Now
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size="lg">
              Custom Arrangements
            </Button>
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="h-12 w-12 mx-auto mb-4 text-pink-500" />
              <h3 className="font-bold mb-2">Local & Fresh</h3>
              <p className="text-sm text-muted-foreground">Sourced daily from local growers</p>
            </div>
            <div>
              <Heart className="h-12 w-12 mx-auto mb-4 text-pink-500" />
              <h3 className="font-bold mb-2">Handcrafted</h3>
              <p className="text-sm text-muted-foreground">Arranged by expert florists</p>
            </div>
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4 text-pink-500" />
              <h3 className="font-bold mb-2">Same-Day Delivery</h3>
              <p className="text-sm text-muted-foreground">Order by 2pm for delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Arrangements</h2>
          <p className="text-center text-muted-foreground mb-12">Discover our most-loved bouquets</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 h-64 flex items-center justify-center text-8xl">
                  {product.image}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{product.name}</CardTitle>
                    {product.tag && <Badge variant="secondary" className="text-xs">{product.tag}</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">${product.price}</span>
                    <Button onClick={() => setCart(cart + 1)}>
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">About Bloom & Petal</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2020, Bloom & Petal started with a simple mission: bring fresh, locally-sourced flowers to our community. 
            Every bouquet is handcrafted with care by our team of passionate florists. We believe flowers have the power to 
            brighten your day, celebrate special moments, and express what words cannot.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-12">Join thousands of happy flower lovers</p>
          <Tabs defaultValue="0" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              {testimonials.map((_, i) => (
                <TabsTrigger key={i} value={i.toString()}>
                  Review {i + 1}
                </TabsTrigger>
              ))}
            </TabsList>
            {testimonials.map((testimonial, i) => (
              <TabsContent key={i} value={i.toString()} className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Bloom</h2>
          <p className="mb-8">Get 15% off your first order and weekly flower inspiration</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Bloom & Petal</h3>
              <p className="text-sm text-muted-foreground">Bringing beauty to your door, one bouquet at a time.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#products" className="hover:text-pink-500">All Flowers</a></li>
                <li><a href="#products" className="hover:text-pink-500">Custom Orders</a></li>
                <li><a href="#products" className="hover:text-pink-500">Gift Boxes</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-pink-500">About Us</a></li>
                <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
                <li><a href="#" className="hover:text-pink-500">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📞 (555) 123-4567</li>
                <li>✉️ hello@bloomandpetal.com</li>
                <li>📍 123 Flower Street, City</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Bloom & Petal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
