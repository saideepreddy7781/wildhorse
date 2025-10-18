const YouTubeGallery = () => {
  const videos = [
    { id: 'u6lmI0V14BQ', title: 'Wild Horse Media Portfolio' },
    { id: 'oIAkui8unzc', title: 'Wedding Highlights' },
    { id: 'e11WgcN4MWU', title: 'Photography Showcase' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Our Work in Motion
          </h2>
          <p className="text-lg font-poppins text-muted-foreground">
            Watch our latest video productions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="aspect-video rounded-lg overflow-hidden shadow-[var(--shadow-pastel)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeGallery;
