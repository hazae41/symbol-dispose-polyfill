# Symbol.dispose and Symbol.asyncDispose polyfill

Polyfill for `Symbol.dispose` and `Symbol.asyncDispose`

```bash
npm i @hazae41/symbol-dispose-polyfill
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/symbol-dispose-polyfill) • [**Deno Module 🦖**](https://deno.land/x/symbol_dispose_polyfill)

## Features
- ESModules and CommonJS
- No external dependency
- Unit-tested
- `Symbol.dispose` is polyfilled as `Symbol.for("dispose")` if not available
- `Symbol.asyncDispose` is polyfilled as `Symbol.for("asyncDispose")` if not available

## Usage

### How?

ESModules 

```tsx
import "@hazae41/symbol-dispose-polyfill"
```

CommonJS

```tsx
require("@hazae41/symbol-dispose-polyfill")
```

Deno

```tsx
import "https://deno.land/x/symbol_dispose_polyfill/src/mod.ts"
```

### Where? 

You can import the polyfll **in your project entry file** or **in a specific file**, you just need to import it before anything that requires `Symbol.dispose` or `Symbol.asyncDispose`

(e.g. For a Next.js app, it can be in `_app.js`)

```tsx
/**
 * This polyfill at the top
 **/
import "@hazae41/symbol-dispose-polyfill"

/**
 * Your imports that requires Symbol.dispose to work
 **/
import { a } from "a"
import { b } from "./b.js"

/**
 * Your code that requires Symbol.dispose to work
 **/
using x = a
```
