import React from 'react';
import { Code2, Wand2, Image, Video, FileText, Workflow, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Coding Assistant',
    desc: 'Inline code suggestions, refactors, and test generation across frameworks.',
  },
  {
    icon: Wand2,
    title: 'Prompt Studio',
    desc: 'Design, version, and evaluate prompts with reusable templates.',
  },
  {
    icon: Image,
    title: 'Image Editor',
    desc: 'Upscale, inpaint, background removal, and style transfer with AI.',
  },
  {
    icon: Video,
    title: 'Video Tools',
    desc: 'Captions, cuts, and smart edits. Generate B‑roll and motion graphics.',
  },
  {
    icon: FileText,
    title: 'Document Insights',
    desc: 'Summaries, Q&A, and insights from PDFs, docs, and spreadsheets.',
  },
  {
    icon: Workflow,
    title: 'Automations',
    desc: 'Chain tools into flows. Schedule and trigger multi‑step tasks.',
  },
  {
    icon: Zap,
    title: 'Real‑time',
    desc: 'Low‑latency responses with streaming, voice, and live previews.',
  },
  {
    icon: Shield,
    title: 'Privacy‑first',
    desc: 'Granular controls, encryption at rest, and secure by default.',
  },
];

const Features = () => {
  return (
    <section id="tools" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">All‑in‑one AI workspace</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Everything you need to build, design, edit, and automate — in one place.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
