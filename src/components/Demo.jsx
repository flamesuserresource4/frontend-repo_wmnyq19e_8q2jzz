import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, Send, MessageSquare } from 'lucide-react';

const Demo = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hey, I\'m Jarvis. Ask me to code, edit images, analyze a doc, or automate a workflow.' },
    { role: 'user', content: 'Generate a React hook that fetches data with caching.' },
    { role: 'bot', content: 'I\'ll draft a useFetch hook with memoized cache and abort support. Want TypeScript?' },
  ]);
  const [input, setInput] = useState('Refactor this function for clarity and add tests.');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: 'bot',
          content:
            'Here\'s a draft solution. I can also generate tests or turn this into a step‑by‑step automation.',
        },
      ]);
    }, 600);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <section id="chat" className="w-full bg-gradient-to-b from-black to-black/95 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
            <MessageSquare className="h-4 w-4 text-cyan-300" />
          </div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Talk to Jarvis</h2>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="max-h-[420px] space-y-4 overflow-y-auto p-2 pr-1">
            {messages.map((m, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className={`mt-1 grid h-7 w-7 place-items-center rounded-md ${
                  m.role === 'bot' ? 'bg-cyan-500/15' : 'bg-white/10'
                } ring-1 ring-white/10`}>
                  {m.role === 'bot' ? (
                    <Bot className="h-4 w-4 text-cyan-300" />
                  ) : (
                    <User className="h-4 w-4 text-white/80" />
                  )}
                </div>
                <div className="flex-1">
                  <div className={`inline-block rounded-lg px-3 py-2 text-sm ${
                    m.role === 'bot' ? 'bg-cyan-500/10 text-cyan-50' : 'bg-white/10 text-white'
                  }`}>{m.content}</div>
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="mt-4 flex items-center gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={2}
              aria-label="Message Jarvis"
              placeholder="Type your request..."
              className="min-h-[44px] flex-1 resize-none rounded-lg border border-white/10 bg-black/60 p-3 text-sm text-white placeholder-white/40 outline-none ring-cyan-400/0 transition focus:ring-2"
            />
            <button
              onClick={send}
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 text-sm font-medium text-black transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
