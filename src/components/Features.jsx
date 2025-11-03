import React from 'react';
import { Code2, Wand2, Image as ImageIcon, Video, FileText, Zap, Shield, Workflow } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Coding Assistant',
    desc: 'Explain, refactor, and generate code with context-aware suggestions.'
  },
  {
    icon: Wand2,
    title: 'Prompt Studio',
    desc: 'Design, test, and version powerful prompts with reusable templates.'
  },
  {
    icon: ImageIcon,
    title: 'Image Editor',
    desc: 'Upscale, remove background, and apply smart edits in seconds.'
  },
  {
    icon: Video,
    title: 'Video Tools',
    desc: 'Auto-captions, cuts, and social-ready clips with AI assistance.'
  },
  {
    icon: FileText,
    title: 'Document Insights',
    desc: 'Summarize, extract key points, and ask questions about long files.'
  },
  {
    icon: Workflow,
    title: 'Automations',
    desc: 'Chain tasks into workflows to ship ideas end-to-end.'
  },
  {
    icon: Zap,
    title: 'Real-time Speed',
    desc: 'Snappy interactions and fast iterations keep you in flow.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    desc: 'Granular controls help keep your data protected.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">All the tools you expect from Jarvis</h2>
          <p className="mt-3 text-white/70">
            Build, edit, and automate across code, media, and documents from one cohesive hub.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
