/// <reference types="bun-types" />

import * as child_process from 'child_process';

const has = () => {
  try {
    child_process.execSync('bun --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
};

const install = () => {
  try {
    const script = child_process.execSync('curl https://bun.sh/install', {
      encoding: 'utf8',
    });

    child_process.execSync(script, {
      stdio: 'inherit',
    });
  } catch (e: any) {
    console.error(`\n> failed to install bun.js:\n${e.toString()}`);
    process.exit(1);
  }
};

export type BunSafeOptions = {
  encoding?: 'utf8' | 'buffer';
  stdio?: 'overlapped' | 'pipe' | 'ignore' | 'inherit';
};

export function bunSafe<Options extends BunSafeOptions>(
  args: string[] | string,
  options?: Options,
) {
  const script = Array.isArray(args) ? args.join(' ') : args;

  if (!script?.length) {
    throw new Error('Received empty arguments');
  }

  if (!has()) install();

  const defaults: any = {
    encoding: 'utf8',
    stdio: options?.encoding ? 'ignore' : 'inherit',
  };

  // @ts-ignore
  options = { ...defaults, ...options };

  return child_process.execSync(`bun ${script}`, options);
}
