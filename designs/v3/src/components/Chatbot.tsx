import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Bot, Send, X, MessageCircle } from 'lucide-react';
import { chatFallback, chatTopics, quickReplies } from '@/data/chatbotKnowledge';

interface Message {
  id: number;
  role: 'bot' | 'user';
  text: string;
}

const GREETING: Message = {
  id: 0,
  role: 'bot',
  text: 'Hi, I am the Eram Hydraulics assistant. Ask me about our services, products, sectors or branches.',
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
          className="flex h-[min(560px,calc(100vh-7rem))] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-primary-900/20 animate-[fadeUp_0.3s_ease-out]"
        >
          <div className="flex items-center justify-between bg-primary-700 px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-primary-900">
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <p className="font-bold text-white">Eram Assistant</p>
                <p className="text-xs text-primary-100">Ask about our services and products</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-md p-1.5 text-white transition-colors hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-neutral-50 px-4 py-5">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <p
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'rounded-br-md bg-primary-700 text-white'
                      : 'rounded-bl-md border border-neutral-200 bg-white text-neutral-800'
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-md border border-neutral-200 bg-white px-4 py-3">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="h-2 w-2 animate-bounce rounded-full bg-neutral-400"
                      style={{ animationDelay: `${dot * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 border-t border-neutral-100 bg-white px-4 py-3">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => send(reply)}
                  className="rounded-full border border-primary-200 px-3 py-1.5 text-xs font-semibold text-primary-800 transition-colors hover:border-accent-400 hover:bg-accent-50"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-neutral-200 bg-white p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your question..."
              aria-label="Your question"
              maxLength={300}
              className="flex-1 rounded-full border border-neutral-300 px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              aria-label="Send message"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-primary-900 transition-colors hover:bg-accent-400 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-400"
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
        className="flex h-14 items-center gap-2 rounded-full bg-primary-700 px-5 font-semibold text-white shadow-xl shadow-primary-900/30 transition-all hover:-translate-y-0.5 hover:bg-primary-600"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        {!open && <span className="text-sm">Chat with us</span>}
      </button>
    </div>
  );
}
