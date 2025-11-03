import React, { useState } from 'react';
import { MessageSquare, Send, Bot, User } from 'lucide-react';

const initialMessages = [
  { role: 'assistant', content: "Hey, I'm Jarvis. What do you want to create today?" },
  { role: 'user', content: 'Can you scaffold a dashboard and add dark mode?' },
  { role: 'assistant', content: 'Absolutely. I will set up a layout, theme switch, and plug in a components library.' }
];

const Demo = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const onSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMsgs = [...messages, { role: 'user', content: trimmed }];
    const reply = {
      role: 'assistant',
      content:
        "Got it. I'd break this into steps and iterate. Connect a backend later for real-time AI responses and memory."
    };
    setMessages([...newMsgs, reply]);
    setInput('');
  };

  return (
    <section id="demo" className="relative w-full bg-gradient-to-b from-black to-zinc-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Talk to Jarvis</h2>
            <p className="text-sm text-white/70">This chat is a local demo. We can wire it to a backend for full capability.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur">
          <div className="h-80 w-full space-y-4 overflow-y-auto p-6">
            {messages.map((m, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`mt-1 flex h-7 w-7 items-center justify-center rounded-full ${
                  m.role === 'assistant' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/10 text-white'
                }`}>
                  {m.role === 'assistant' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                </div>
                <div className="max-w-[80%] rounded-2xl bg-white/5 px-4 py-3 text-sm leading-relaxed text-white/90">
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={onSend} className="flex items-center gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me to code, edit images, or cut a video clip..."
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Demo;
