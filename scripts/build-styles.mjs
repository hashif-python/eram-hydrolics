import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
function runNpm(args, cwd = root) {
  const result = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', args, {
    cwd, stdio: 'inherit', shell: process.platform === 'win32', env: process.env,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}

// Design 2 uses React 19; the dashboard and the other sites use React 18.
// Keep its dependencies in its own node_modules so React hooks share exactly
// the same React runtime as ReactDOM, React Router and Framer Motion.
const v2Path = join(root, 'designs', 'v2');
if (!existsSync(join(v2Path, 'node_modules', 'react', 'package.json')) ||
    !existsSync(join(v2Path, 'node_modules', 'vite', 'package.json'))) {
  console.log('\n━━ Installing isolated React 19 dependencies for Style 2 ━━');
  runNpm(['install', '--no-audit', '--no-fund'], v2Path);
}

for (let version = 1; version <= 5; version++) {
  console.log(`\n━━ Building ERAM Style ${version} of 5 ━━`);
  if (version === 2) {
    runNpm(['run', 'build'], v2Path);
  } else {
    runNpm(['run', 'build', '--workspace', `@eram-hydraulics/style-v${version}`]);
  }
  const html = join(root, 'public', 'styles', `v${version}`, 'index.html');
  if (!existsSync(html)) {
    console.error(`Expected preview entry is missing: ${html}`);
    process.exit(1);
  }
}
console.log('\nAll five website versions are ready at /styles/v1/ through /styles/v5/.');
