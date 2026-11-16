import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Bot, MessageSquare, Send, X } from 'lucide-react';
import { getBotReply, type BotLink } from '@/lib/chatbot';

interface ChatMessage {
  id: number;
  role: 'bot' | 'user';
  text: string;
  links?: BotLink[];
}

const quickReplies = ['Services', 'Products', 'Partner agencies', 'Request a quote', 'Contact details'];
const REPLY_DELAY_MS = 600;

const greeting: ChatMessage = {
  id: 0,
  role: 'bot',
  text: "Hello, I'm the ERAM assistant. Ask me about our services, products, partner agencies, or how to request a quotation.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([greeting]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const nextId = useRef(1);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;

    const reply = getBotReply(text);
    const userId = nextId.current++;
    const botId = nextId.current++;

    setMessages((prev) => [...prev, { id: userId, role: 'user', text }]);
    setInput('');
    setTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: botId, role: 'bot', text: reply.text, links: reply.links }]);
      setTyping(false);
    }, REPLY_DELAY_MS);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close assistant' : 'Open assistant'}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-eram-600 hover:bg-eram-700 text-white rounded-full shadow-lg shadow-eram-600/30 hover:scale-110 transition-all duration-300"
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="ERAM assistant"
          className="fixed bottom-24 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-40 flex flex-col h-[min(540px,calc(100vh-8rem))] bg-charcoal-900 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-scale-in"
        >
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-charcoal-800">
            <div className="w-10 h-10 bg-eram-600 rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-display font-semibold text-white text-sm">ERAM Assistant</p>
              <p className="text-steel-400 text-xs">Ask about services, products, or quotes</p>
            </div>
          </div>

          <div ref={listRef} aria-live="polite" className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'bg-eram-600 text-white rounded-br-md'
                      : 'bg-charcoal-800 text-steel-100 border border-white/5 rounded-bl-md'
                  }`}
                >
                  {message.text}
                </div>
                {message.links && message.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2 max-w-[85%]">
                    {message.links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="px-3 py-1.5 bg-charcoal-700 hover:bg-eram-600/20 border border-white/5 text-eram-300 hover:text-white text-xs font-medium rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="flex items-start">
                <div className="px-4 py-3 bg-charcoal-800 border border-white/5 rounded-2xl rounded-bl-md flex gap-1">
                  <span className="w-1.5 h-1.5 bg-steel-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-steel-400 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 bg-steel-400 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
          </div>

          <div className="px-4 pt-3 flex flex-wrap gap-2">
            {quickReplies.map((label) => (
              <button
                key={label}
                onClick={() => send(label)}
                disabled={typing}
                className="px-3 py-1.5 bg-charcoal-800 hover:bg-charcoal-700 border border-white/5 text-steel-300 hover:text-white text-xs font-medium rounded-full transition-colors disabled:opacity-50"
              >
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              aria-label="Type your question"
              maxLength={300}
              className="flex-1 px-4 py-3 bg-charcoal-800 border border-white/5 focus:border-eram-600/50 text-white placeholder-steel-500 text-sm rounded-xl outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              aria-label="Send message"
              className="w-11 h-11 flex items-center justify-center bg-eram-600 hover:bg-eram-700 disabled:bg-charcoal-700 disabled:text-steel-500 text-white rounded-xl transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
