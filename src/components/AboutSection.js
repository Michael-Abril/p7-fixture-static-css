"use client";

export default function AboutSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6 text-muted-foreground">
            I'm a passionate photographer with over 10 years of experience capturing life's most precious moments. 
            My journey began with a simple film camera inherited from my grandfather, and has evolved into 
            a professional career that spans weddings, portraits, and landscapes.
          </p>
          <p className="text-lg text-muted-foreground">
            My style focuses on authentic emotions and natural lighting, believing that the best photographs 
            are those that tell a story and evoke genuine feelings.
          </p>
        </div>
      </div>
    </section>
  );
}