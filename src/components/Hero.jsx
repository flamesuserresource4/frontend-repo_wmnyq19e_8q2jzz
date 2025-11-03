import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          <span>3D interactive workspace</span>
        </div>
        <h1 className="bg-gradient-to-br from-white via-white to-cyan-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Jarvis — create, edit, and ship with AI
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-white/70 sm:text-lg">
          A unified studio for coding assistance, prompt design, image & video editing, document insights, and automated workflows — all powered by real‑time AI.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#chat"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <Rocket className="h-4 w-4" /> Start chatting
          </a>
          <a
            href="#tools"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Explore tools
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
