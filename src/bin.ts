#!/usr/bin/env node

import { bunSafe } from './index';

const exit = (() => {
  let FINISHED = false;
  function wait() {
    if (!FINISHED) setTimeout(wait);
  }
  wait();
  return (code: 1 | 0) => {
    FINISHED = true;
    process.exit(code);
  };
})();

const args = process.argv.slice(2);
if (!args.length) throw new Error('Received empty arguments');

try {
  bunSafe(args, { stdio: 'inherit' });
  exit(0);
} catch (e) {
  exit(1);
}
