import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
          <span>Introducing your AI copilot</span>
        </div>
        <h1 className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Create with Intelligence
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
          A modern AI that understands context, builds apps, and helps you ship faster. Talk, iterate, and
          watch ideas become reality.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-sm transition hover:bg-white/90"
          >
            <Rocket className="h-4 w-4" /> Try a quick demo
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
