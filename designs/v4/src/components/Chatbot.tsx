import { useEffect, useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MessageCircle, Send, X } from 'lucide-react';
import { enquiryEmail, quickQuestions, respond, type ChatLink, type ChatReply } from '@/lib/chatbot';

interface ChatMessage {
  id: number;
  role: 'bot' | 'user';
  text: string;
  links?: ChatLink[];
}

const WELCOME: ChatReply = {
  text: 'Welcome to ERAM Hydraulics. I can help with our products, services, company information or contact details. What would you like to know?',
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([{ id: 0, role: 'bot', ...WELCOME }]);
  const nextId = useRef(1);
  const listRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const ask = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = respond(trimmed);
    const userMessage: ChatMessage = { id: nextId.current++, role: 'user', text: trimmed };
    const botMessage: ChatMessage = { id: nextId.current++, role: 'bot', text: reply.text, links: reply.links };
    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(input);
    setInput('');
  };

  const prepareEmail = () => {
    const href = `mailto:${enquiryEmail.to}?subject=${encodeURIComponent(enquiryEmail.subject)}&body=${encodeURIComponent(enquiryEmail.body)}`;
    window.location.href = href;
  };

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-4 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.section
            key="panel"
            role="dialog"
            aria-label="ERAM Hydraulics support chat"
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto flex h-[min(560px,70vh)] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-sm border border-steel-200 bg-white shadow-2xl"
          >
            <header className="flex items-center justify-between bg-navy-900 px-5 py-4 text-white">
              <div>
                <p className="font-serif text-base font-bold">ERAM Support</p>
                <p className="text-xs text-steel-200">Automated answers from company information</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-sm p-2 text-steel-200 transition hover:bg-navy-800 hover:text-white"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </header>

            <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto bg-steel-50 px-4 py-5" aria-live="polite">
              {messages.map((message) => (
                <div key={message.id} className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`max-w-[88%] rounded-sm px-4 py-3 text-[14px] leading-[1.55] ${
                      message.role === 'user' ? 'bg-navy-800 text-white' : 'border border-steel-200 bg-white text-steel-800'
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.links && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {message.links.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setOpen(false)}
                          className="inline-flex items-center gap-1.5 rounded-sm border border-gold-500/60 bg-white px-3 py-1.5 text-[13px] font-semibold text-navy-900 transition hover:bg-gold-50"
                        >
                          {link.label}
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-steel-200 bg-white px-4 py-3">
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q) => (
                  <button
                    key={q.label}
                    type="button"
                    onClick={() => ask(q.message)}
                    className="rounded-sm border border-steel-300 px-3 py-1.5 text-[13px] font-semibold text-navy-800 transition hover:border-navy-700 hover:bg-navy-800 hover:text-white"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={prepareEmail}
                className="flex w-full items-center justify-center gap-2 rounded-sm border border-navy-200 px-3 py-2 text-[13px] font-semibold text-navy-900 transition hover:bg-navy-50"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Prepare an email enquiry
              </button>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <label htmlFor="chat-input" className="sr-only">Type your question</label>
                <input
                  id="chat-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question"
                  maxLength={300}
                  className="field py-2.5 text-[14px]"
                />
                <button type="submit" aria-label="Send question" disabled={!input.trim()} className="flex w-11 shrink-0 items-center justify-center rounded-sm bg-navy-800 text-white transition hover:bg-navy-900 disabled:opacity-40">
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close support chat' : 'Open support chat'}
        className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-white shadow-xl transition duration-300 hover:bg-navy-900 hover:shadow-2xl"
      >
        {!open && !reduce && (
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-gold-400/50" aria-hidden="true" />
        )}
        <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
