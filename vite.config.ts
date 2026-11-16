import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

function designHistoryFallback() {
  return {
    name: 'design-history-fallback',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: () => void) => {
        const path = (req.url || '').split('?')[0];
        if (req.method !== 'GET' || !req.headers.accept?.includes('text/html')) return next();
        const match = path.match(/^\/styles\/(v[1-5])\/(.*)$/);
        if (!match) return next();
        const possibleFile = join(process.cwd(), 'public', path);
        if (existsSync(possibleFile) && statSync(possibleFile).isFile()) return next();
        const fallback = join(process.cwd(), 'public', 'styles', match[1], 'index.html');
        if (!existsSync(fallback)) return next();
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(readFileSync(fallback));
      });
    },
  };
}

export default defineConfig({
  plugins: [designHistoryFallback(), react()],
  server: { host: '0.0.0.0' },
});
