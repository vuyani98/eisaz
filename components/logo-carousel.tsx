// src/components/LogoCarousel.jsx (or similar file)
"use client"

import React from 'react';
// You won't need the Factory icon anymore, but I'll leave it commented out
// import { Factory } from "lucide-react"

// --- STEP 1: Replace partner names with logo image filenames ---
// These filenames MUST exactly match the images in your 'public/trusted' folder.
// e.g., public/trusted/zisco_steel.png
const logoFilenames = [
  "Anolle-Casting-and-Engineering.jpg",
  "Barloworld-logo.png",
  "Bellini-Coachworks.jpg",
  "BSI-Steel-logo.jpg",
  "Byco.jpg",
  "CIRCLEPAK-Logo-B-300x85-1-e1676538112530.png",
  "Copperwares-Logo.jpg"
];

// Base path for images inside the public directory
const BASE_PATH = '/trusted/';

export function LogoCarousel() {
  // --- STEP 2: Duplicate the list for seamless infinite scrolling ---
  const logosForLoop = [...logoFilenames, ...logoFilenames];

  const ITEM_WIDTH = 256; 
  const TOTAL_WIDTH = logosForLoop.length * ITEM_WIDTH;

  return (
    <section className="py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-foreground mb-8">
          Trusted Partners
        </h2>

        <div className="relative">
          {/* Gradient overlays for fade effect (keep this for aesthetics) */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex overflow-hidden">
            {/* The outer div that holds two sets of logos and is animated */}
            <div className="flex animate-scroll-track" style={{ width: `${TOTAL_WIDTH}px` }}> 
              
              {logosForLoop.map((filename, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-24"
                >
                  <div className="w-full h-full bg-card flex items-center justify-center p-4">
                    {/* --- STEP 3: Use the image tag with the dynamic path --- */}
                    <img
                      // Construct the full path: /trusted/filename.png
                      src={`${BASE_PATH}${filename}`} 
                      alt={`Partner Logo ${filename.replace(/_/g, ' ').replace(/\.[^/.]+$/, "")}`}
                      // Apply Tailwind classes for styling the logo image
                      className="max-w-full max-h-full object-contain opacity-50 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}