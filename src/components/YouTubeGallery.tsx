// src/components/YouTubeGallery.tsx

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";

// --- UPDATED video list with only 4 videos ---
const videos = [
  { id: 'u6lmI0V14BQ', title: 'Engagement Ceremony Highlight' },
  { id: 'oIAkui8unzc', title: 'Wedding Cinematic Film' },
  { id: 'bThTutu6Py8', title: 'Love Story Feature' },
  { id: 'e11WgcN4MWU', title: 'Pre-Wedding Shoot' },
];

const YouTubeGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-transition every 8 seconds
  useEffect(() => {
    if (!isAutoPlaying || videos.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Return null or a placeholder if there are no videos
  if (videos.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
              Our Work in Motion
            </h2>
            <p className="text-lg font-poppins text-muted-foreground">
              No videos available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const currentVideoId = videos[currentIndex].id;

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

        {/* Video Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Video Player */}
          <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
            <iframe
              key={currentVideoId}
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=0&rel=0`}
              title={videos[currentIndex].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm"
            aria-label="Previous video"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm"
            aria-label="Next video"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Video Title Overlay - Shadow removed */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
            <h3 className="text-white text-lg md:text-xl font-poppins font-semibold">
              {videos[currentIndex].title}
            </h3>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  index === currentIndex
                    ? 'bg-primary w-10 h-3'
                    : 'bg-muted-foreground/40 w-3 h-3 hover:bg-muted-foreground/60'
                )}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>

          {/* Video Counter */}
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground font-poppins">
              Video {currentIndex + 1} of {videos.length}
              {isAutoPlaying && <span className="ml-2 text-primary">• Auto-playing</span>}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeGallery;
