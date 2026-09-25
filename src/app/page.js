import GalleryGrid from '../components/GalleryGrid'
import AboutSection from '../components/AboutSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Alex Morgan</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Capturing life's most precious moments through a creative lens</p>
        </header>
        
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Portfolio</h2>
          <GalleryGrid />
        </section>
        
        <section className="mb-16">
          <AboutSection />
        </section>
        
        <footer className="text-center text-muted-foreground pt-8 border-t border-border">
          <p>© {new Date().getFullYear()} Alex Morgan Photography. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}