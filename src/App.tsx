import React from 'react';
import { SiteHeader } from '@/components/blocks/site-header';
import { Hero } from '@/components/blocks/hero';
import { FeatureGrid } from '@/components/blocks/feature-grid';
import { PricingTiers } from '@/components/blocks/pricing-tiers';
import { Footer } from '@/components/blocks/footer';

export function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader 
        logo="Yoga Studio"
        navItems={[
          { name: 'Home', href: '#home' },
          { name: 'Classes', href: '#classes' },
          { name: 'Pricing', href: '#pricing' },
          { name: 'Contact', href: '#contact' },
        ]}
      />
      
      <main>
        <Hero 
          title="Find Your Inner Peace"
          description="Discover the transformative power of yoga in our serene studio. Join us for classes that nurture your mind, body, and spirit."
          primaryCta="Book a Class"
          secondaryCta="View Schedule"
          image={<div className="w-full h-64 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-foreground font-bold">Yoga Studio Image</div>}
        />
        
        <section id="classes" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Classes</h2>
            <FeatureGrid 
              features={[
                {
                  icon: () => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                  ),
                  title: "Morning Flow",
                  description: "Start your day with energy and intention. This vinyasa flow class builds heat and focuses on smooth transitions between poses.",
                },
                {
                  icon: () => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                  ),
                  title: "Restorative Yoga",
                  description: "Unwind and restore with gentle poses held for longer periods. Perfect for stress relief and deep relaxation.",
                },
                {
                  icon: () => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                      <path d="M19 14c1.49-1.46 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  ),
                  title: "Meditation & Mindfulness",
                  description: "Connect with your breath and cultivate mindfulness through guided meditation and breathing techniques.",
                }
              ]}
            />
          </div>
        </section>
        
        <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Membership Options</h2>
            <PricingTiers 
              tiers={[
                {
                  name: "Drop-in",
                  price: "$20",
                  period: "per class",
                  description: "Perfect for occasional practitioners",
                  features: [
                    "Access to all classes",
                    "Equipment provided",
                    "Cancel anytime"
                  ],
                  cta: "Book Now"
                },
                {
                  name: "Monthly Unlimited",
                  price: "$99",
                  period: "per month",
                  description: "Best value for regular practitioners",
                  features: [
                    "Unlimited classes",
                    "Equipment provided",
                    "Priority booking",
                    "10% off workshops"
                  ],
                  cta: "Join Now",
                  featured: true
                },
                {
                  name: "10-Class Pack",
                  price: "$180",
                  period: "10 classes",
                  description: "Flexibility with savings",
                  features: [
                    "10 classes of your choice",
                    "Equipment provided",
                    "Valid for 3 months"
                  ],
                  cta: "Purchase"
                }
              ]}
            />
          </div>
        </section>
      </main>
      
      <Footer 
        companyName="Yoga Studio"
        copyright={`© ${new Date().getFullYear()} Yoga Studio. All rights reserved.`}
        socialLinks={[]}
        sections={[
          {
            title: "Classes",
            links: [
              { name: "Morning Flow", href: "#" },
              { name: "Restorative Yoga", href: "#" },
              { name: "Meditation", href: "#" },
              { name: "Workshops", href: "#" }
            ]
          },
          {
            title: "Studio",
            links: [
              { name: "About Us", href: "#" },
              { name: "Instructors", href: "#" },
              { name: "Schedule", href: "#" },
              { name: "Location", href: "#" }
            ]
          },
          {
            title: "Contact",
            links: [
              { name: "info@yogastudio.com", href: "mailto:info@yogastudio.com" },
              { name: "(123) 456-7890", href: "tel:+11234567890" }
            ]
          }
        ]}
      />
    </div>
  );
}

export default App;