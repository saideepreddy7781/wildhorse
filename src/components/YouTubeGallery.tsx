import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

const videos = [
  { id: 'u6lmI0V14BQ', title: 'Wild Horse Media Portfolio' },
  { id: 'oIAkui8unzc', title: 'Wedding Highlights' },
  { id: 'e11WgcN4MWU', title: 'Photography Showcase' },
  // Add more videos here if needed
];

const YouTubeGallery = () => {
  const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);

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

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

          {/* Main Video Player */}
          <div className="md:col-span-2 aspect-video rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe
              key={currentVideoId}
              // --- REMOVED ?autoplay=1 from src ---
              src={`https://www.youtube.com/embed/${currentVideoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Thumbnail List */}
          <div className="md:col-span-1 flex flex-col gap-4">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setCurrentVideoId(video.id)}
                className={cn(
                  "relative aspect-video rounded-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform duration-200",
                  currentVideoId === video.id ? "opacity-70 scale-95 cursor-default" : "hover:scale-[1.03]"
                )}
                disabled={currentVideoId === video.id}
                aria-label={`Play video: ${video.title}`}
              >
                {/* Thumbnail Image */}
                <img
                   src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                   alt={video.title}
                   className="absolute inset-0 w-full h-full object-cover"
                />
                 {/* Dark overlay */}
                <div className={cn(
                    "absolute inset-0 bg-black/30 transition-opacity",
                    currentVideoId === video.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}></div>
                {/* Play Icon Overlay */}
                 <PlayCircle className={cn(
                   "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-white/80 transition-opacity",
                    currentVideoId === video.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                 )} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeGallery;