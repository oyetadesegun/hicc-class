'use client';

import React from 'react';

export function LoadingScreen({ message = "Fetching latest data..." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-8 transition-all duration-500 animate-in fade-in">
      <div className="relative flex flex-col items-center">
        {/* Pulsing Glow Background */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse scale-150 -z-10"></div>
        
        {/* Blinking Logo */}
        <div className="relative h-24 w-auto flex items-center justify-center">
          <img 
            src="/logo/logo.png" 
            alt="Harvesters Logo" 
            className="h-20 w-auto animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite] drop-shadow-2xl brightness-110"
          />
        </div>

        {/* Brand Text with bounce */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-xl font-bold tracking-[0.2em] font-outfit text-secondary/80 animate-pulse">
            HARVESTERS
          </span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></div>
          </div>
          <p className="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-widest opacity-70">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
