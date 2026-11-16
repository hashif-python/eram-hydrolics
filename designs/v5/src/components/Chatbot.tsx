import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Bot, Send, X } from 'lucide-react';
import { chatFallback, chatTopics, quickReplies } from '@/data/chatbotKnowledge';

interface Message {
  id: number;
  role: 'bot' | 'user';
  text: string;
}

const GREETING: Message = {
  id: 0,
  role: 'bot',
  text: 'Hello, I am the Eram Hydraulics assistant. Ask me about our services, products, sectors or branches.',
};

function findAnswer(question: string): string {
  const normalized = ` ${question.toLowerCase().replace(/[^a-z0-9&\- ]+/g, ' ').replace(/\s+/g, ' ').trim()} `;
  let best = { score: 0, answer: chatFallback };

  for (const topic of chatTopics) {
    const score = topic.keywords.filter((keyword) => normalized.includes(` ${keyword} `)).length;
    if (score > best.score) best = { score, answer: topic.answer };
  }

  return best.answer;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [typing, setTyping] = useState(false);
  const nextId = useRef(1);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    const userMessage: Message = { id: nextId.current++, role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setTyping(true);

    window.setTimeout(() => {
      const reply: Message = { id: nextId.current++, role: 'bot', text: findAnswer(trimmed) };
      setMessages((prev) => [...prev, reply]);
      setTyping(false);
    }, 600);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    send(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-4 sm:bottom-6 sm:right-6">
      {open && (
        <div
          role="dialog"
          aria-label="Eram Hydraulics chat assistant"
          className="flex h-[min(580px,calc(100vh-7rem))] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden border border-white/10 bg-ink-950 shadow-2xl shadow-black/40 animate-fadeUp"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-signal-400 text-ink-950">
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-xl font-bold uppercase leading-none text-white">Eram Assistant</p>
                <p className="mt-1 text-xs text-ink-300">Ask about services and products</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1.5 text-ink-200 transition-colors hover:text-signal-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-ink-900 px-4 py-5">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <p
                  className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'bg-signal-400 font-semibold text-ink-950'
                      : 'border-l-2 border-signal-400 bg-ink-800 text-ink-100'
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex gap-1.5 border-l-2 border-signal-400 bg-ink-800 px-4 py-3">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="h-1.5 w-1.5 animate-bounce bg-signal-400"
                      style={{ animationDelay: `${dot * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 border-t border-white/10 bg-ink-950 px-4 py-3">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => send(reply)}
                  className="inline-flex items-center gap-1 border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink-100 transition-colors hover:border-signal-400 hover:text-signal-300"
                >
                  {reply}
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/10 bg-ink-950 p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your question..."
              aria-label="Your question"
              maxLength={300}
              className="flex-1 border border-white/15 bg-ink-900 px-4 py-2.5 text-sm text-white placeholder:text-ink-400 focus:border-signal-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              aria-label="Send message"
              className="flex h-10 w-10 items-center justify-center bg-signal-400 text-ink-950 transition-colors hover:bg-signal-300 disabled:cursor-not-allowed disabled:bg-ink-700 disabled:text-ink-400"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        className="group flex h-14 items-center gap-3 bg-signal-400 px-5 font-bold uppercase tracking-wide text-ink-950 shadow-xl shadow-black/30 transition-all hover:-translate-y-0.5 hover:bg-signal-300"
      >
        <Bot className="h-5 w-5" />
        {open ? 'Close' : 'Chat with us'}
      </button>
    </div>
  );
}
