import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="text-lg font-semibold tracking-tight">Jarvis</a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#tools" className="hover:text-white">Tools</a>
            <a href="#chat" className="hover:text-white">Chat</a>
            <a href="#get-started" className="rounded-md bg-white/10 px-3 py-1.5 text-white hover:bg-white/20">Get started</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Features />
        <Demo />

        {/* Simple CTA */}
        <section id="get-started" className="w-full bg-gradient-to-b from-black to-black py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h3 className="text-2xl font-semibold sm:text-3xl">Build with Jarvis today</h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/70">
              Ship faster with an integrated AI studio for code, content, media, and automation — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#chat" className="rounded-md bg-cyan-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-cyan-400">Open chat</a>
              <a href="#tools" className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">Explore tools</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
