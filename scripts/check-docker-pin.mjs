import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function findUnpinnedCreators(dockerfile) {
  return [...dockerfile.matchAll(/npm create\s+(?:@[^\s@/]+\/)?[^\s@/]+@latest\b/g)].map((match) => match[0]);
}

const invokedDirectly = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedDirectly) {
  const dockerfile = readFileSync(new URL('../Dockerfile', import.meta.url), 'utf8');
  const unpinned = findUnpinnedCreators(dockerfile);
  if (unpinned.length) {
    console.error(`unpinned scaffolder in Dockerfile: ${unpinned.join(', ')}`);
    process.exitCode = 1;
  } else {
    console.log('Dockerfile scaffolder is pinned');
  }
}
