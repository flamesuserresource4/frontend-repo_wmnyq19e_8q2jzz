import React from 'react';
import { Github, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold">Jarvis</p>
          <p className="text-sm text-white/60">Create, edit, and ship with AI.</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#privacy"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            <ShieldCheck className="h-4 w-4" /> Privacy
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
