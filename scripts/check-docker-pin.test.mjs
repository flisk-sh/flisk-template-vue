import assert from 'node:assert/strict';
import test from 'node:test';
import { findUnpinnedCreators } from './check-docker-pin.mjs';

test('flags @latest npm create commands', () => {
  assert.deepEqual(findUnpinnedCreators('RUN npm create vue@latest app -- --default'), ['npm create vue@latest']);
  assert.deepEqual(findUnpinnedCreators('RUN npm create vue@3.24.0 app -- --default'), []);
});

test('ignores pinned base images and unrelated latest text', () => {
  const dockerfile = 'FROM node:22-alpine@sha256:abc\n# never use latest\nRUN npm create vue@3.24.0 app -- --default\n';
  assert.deepEqual(findUnpinnedCreators(dockerfile), []);
});
