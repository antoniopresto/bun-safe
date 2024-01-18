> Run scripts using Bun.js and perhaps install Bun first if necessary.

## Usage

```ts
import { bunSafe } from 'bun-safe';
bunSafe('--version') // -> string;
```

Options and results:
```ts
type Options = {
  encoding?: 'utf8' | 'buffer';
  stdio?: 'overlapped' | 'pipe' | 'ignore' | 'inherit';
};

type DefaultOptions = { encoding: 'utf8'; stdio: 'inherit' };

type Result = string | Buffer;
```


## Command line

After globally installed
```shell
bun-safe --version
```

## Global install
```shell 
pnpm i -g bun-safe
```

## License:

MIT
