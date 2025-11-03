import React from 'react';
import { Brain, Zap, Shield, Workflow } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Understands Context',
    desc: 'Keeps track of goals and constraints to deliver relevant results.'
  },
  {
    icon: Workflow,
    title: 'Builds End-to-End',
    desc: 'From APIs to UI, generate and connect the pieces that matter.'
  },
  {
    icon: Zap,
    title: 'Fast Iteration',
    desc: 'Refine ideas in seconds with quick, incremental updates.'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'Your data stays protected with robust guardrails and controls.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why this AI stands out</h2>
          <p className="mt-3 text-white/70">
            Designed for creators, developers, and teams who want to move from idea to impact.
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
