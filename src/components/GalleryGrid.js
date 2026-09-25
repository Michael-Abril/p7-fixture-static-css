"use client";

const photos = Array(9).fill().map((_, i) => ({
  id: i + 1,
  title: `Photo ${i + 1}`
}));

export default function GalleryGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="overflow-hidden rounded-lg bg-muted aspect-square flex items-center justify-center">
              <div className="text-muted-foreground text-lg font-medium">
                {photo.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}