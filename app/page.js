export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">Photographer Portfolio</h1>
        </div>
      </header>

      <main>
        {/* Gallery Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted rounded-lg flex items-center justify-center"
                >
                  <span className="text-muted-foreground">Photo {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 bg-card">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">About</h2>
            <p className="text-muted-foreground max-w-2xl">
              Welcome to my photography portfolio. I am a professional photographer
              specializing in portrait, landscape, and event photography. With over
              10 years of experience, I capture moments that tell stories and evoke
              emotions. Thank you for visiting my work!
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Photographer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
