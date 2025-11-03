import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Simple top bar */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-sm bg-white" />
            <span className="text-sm font-medium text-white/90">Create AI</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#demo" className="hover:text-white">Demo</a>
            <a href="#cta" className="hover:text-white">Get started</a>
          </nav>
          <a href="#demo" className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black hover:bg-white/90">Try demo</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Demo />
        <section id="cta" className="w-full bg-gradient-to-b from-zinc-900 to-black py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h3 className="text-2xl font-semibold sm:text-3xl">Ready to build with AI?</h3>
            <p className="mt-3 text-white/70">
              Connect this interface to your backend and unlock full conversations, data, and deployments.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#demo" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90">Launch demo</a>
              <a href="#features" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">Explore features</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
