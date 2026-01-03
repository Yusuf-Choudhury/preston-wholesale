"use client";

export default function BackgroundVideo() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-black">
      {/* Video Element 
        - playsinline: Essential for iOS (prevents full screen)
        - muted: Required for autoplay
        - object-cover: Ensures it fills the screen like a wallpaper
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover opacity-60 transition-opacity duration-1000 ease-in-out"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Overlays */}
      
      {/* 1. Gradient Overlay (Bottom to Top) - Makes text pop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* 2. Vignette (Dark edges) - Focuses eye on center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      
      {/* 3. Scanline/Texture Effect - Adds "Tech/Luxury" feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
    </div>
  );
}