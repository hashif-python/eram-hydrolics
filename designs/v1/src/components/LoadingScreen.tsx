import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timer = setTimeout(() => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setDone(true), 400);
            return 100;
          }
          return prev + Math.random() * 15 + 5;
        });
      }, 100);
    }, 200);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-950 transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="relative flex flex-col items-center gap-8">
        <div className="relative">
          <div className="absolute inset-0 animate-pulse-glow rounded-2xl" />
          <div className="rounded-2xl bg-white px-8 py-5 shadow-2xl shadow-black/40">
            <img src="/styles/v1/logo.png" alt="ERAM Hydraulics" className="h-16 w-auto" />
          </div>
        </div>
        <div className="w-48 h-0.5 bg-charcoal-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-eram-500 to-eram-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <span className="text-steel-500 text-xs font-medium tracking-wider">ENGINEERING HYDRAULIC EXCELLENCE</span>
      </div>
    </div>
  );
}
