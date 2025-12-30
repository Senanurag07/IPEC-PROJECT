"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const playerScript = document.createElement("script");
    playerScript.src = "https://fast.wistia.com/player.js";
    playerScript.async = true;

    const embedScript = document.createElement("script");
    embedScript.src = "https://fast.wistia.com/embed/eosbpp4oyi.js";
    embedScript.async = true;
    embedScript.type = "module";

    document.body.appendChild(playerScript);
    document.body.appendChild(embedScript);

    // Create the wistia-player element after scripts load
    playerScript.onload = () => {
      if (containerRef.current) {
        const player = document.createElement("wistia-player");
        player.setAttribute("media-id", "eosbpp4oyi");
        player.setAttribute("seo", "false");
        player.setAttribute("aspect", "1.7777777777777777");
        player.className = "absolute inset-0 w-full h-full object-cover";
        containerRef.current.appendChild(player);
      }
    };

    return () => {
      document.body.removeChild(playerScript);
      document.body.removeChild(embedScript);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Container */}
      <div ref={containerRef} className="absolute inset-0" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Your Hero Headline Here
        </h1>
      </div>
    </section>
  );
}
