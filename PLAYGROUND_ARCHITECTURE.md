# Multi-Framework Playground Architecture

This document outlines how to organize the playground to support multiple framework bindings.

## Current Structure (React-focused)
```
playground/
├── index.html
├── src/
│   ├── main.tsx           # React entry point
│   ├── App.tsx            # React app
│   └── components/        # React-specific playground components
```

## Proposed Multi-Framework Structure

### Option A: Separate Playground Apps
```
playgrounds/
├── react/                 # React playground (current)
│   ├── index.html
│   ├── package.json       # React-specific deps
│   ├── vite.config.ts     # React Vite config
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       └── components/
├── vue/                   # Vue playground
│   ├── index.html
│   ├── package.json       # Vue-specific deps
│   ├── vite.config.ts     # Vue Vite config
│   └── src/
│       ├── main.ts
│       ├── App.vue
│       └── components/
├── svelte/                # Svelte playground
│   ├── index.html
│   ├── package.json       # Svelte-specific deps
│   ├── vite.config.ts     # Svelte Vite config
│   └── src/
│       ├── main.ts
│       ├── App.svelte
│       └── components/
└── vanilla/               # Vanilla JS playground
    ├── index.html
    ├── package.json       # Minimal deps
    ├── vite.config.ts     # Vanilla Vite config
    └── src/
        ├── main.ts
        ├── app.ts
        └── components/
```

### Option B: Unified Playground with Framework Switching
```
playground/
├── index.html             # Framework selector
├── frameworks/
│   ├── react/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   └── components/
│   ├── vue/
│   │   ├── main.ts
│   │   ├── App.vue
│   │   └── components/
│   ├── svelte/
│   │   ├── main.ts
│   │   ├── App.svelte
│   │   └── components/
│   └── vanilla/
│       ├── main.ts
│       └── app.ts
├── shared/
│   ├── styles/            # Shared CSS
│   ├── examples/          # Framework-agnostic examples
│   └── utils/             # Shared utilities
└── src/
    ├── framework-loader.ts # Dynamic framework loading
    └── common/            # Common playground logic
```

## Recommended Approach: Option A (Separate Apps)

### Benefits:
- **🔧 Framework-specific tooling** (each has its own Vite config, package.json)
- **📦 Isolated dependencies** (no conflicts between framework versions)
- **⚡ Faster development** (only load what you're working on)
- **🎯 Clear separation** of concerns

### Implementation:

#### 1. Package.json Scripts
```json
{
  "scripts": {
    "dev": "pnpm dev:react",
    "dev:react": "cd playgrounds/react && pnpm dev",
    "dev:vue": "cd playgrounds/vue && pnpm dev",
    "dev:svelte": "cd playgrounds/svelte && pnpm dev",
    "dev:vanilla": "cd playgrounds/vanilla && pnpm dev",
    "dev:all": "concurrently \"pnpm dev:react\" \"pnpm dev:vue\" \"pnpm dev:svelte\"",
    "build:playgrounds": "pnpm build:react && pnpm build:vue && pnpm build:svelte"
  }
}
```

#### 2. Shared Configuration
```
shared/
├── vite.base.config.ts    # Base Vite config
├── tsconfig.base.json     # Base TypeScript config
├── .eslintrc.base.js      # Base ESLint config
└── styles/
    ├── playground.css     # Shared playground styles
    └── examples.css       # Common example styles
```

#### 3. Framework-Specific Bindings
```
src/
├── core/                  # Headless core (framework-agnostic)
├── react/                 # React bindings
├── vue/                   # Vue bindings (future)
├── svelte/               # Svelte bindings (future)
└── vanilla/              # Vanilla JS bindings (future)
```

## Development Workflow

### Current (React):
```bash
pnpm dev                   # Start React playground
```

### Future (Multi-framework):
```bash
pnpm dev:react            # React playground on :3000
pnpm dev:vue              # Vue playground on :3001  
pnpm dev:svelte           # Svelte playground on :3002
pnpm dev:all              # All playgrounds simultaneously
```

## Shared Example System

### Framework-Agnostic Example Definitions:
```typescript
// shared/examples/basic-grid.ts
export const basicGridExample = {
  id: 'basic',
  name: 'Basic Grid',
  description: 'Simple 3x3 grid layout',
  config: {
    columns: 3,
    rows: 3,
    gap: '1rem',
    items: [
      { id: '1', x: 0, y: 0, w: 1, h: 1, content: 'Item 1' },
      { id: '2', x: 1, y: 0, w: 1, h: 1, content: 'Item 2' },
      // ...
    ]
  }
}
```

### Framework-Specific Implementations:
Each playground consumes the same example definitions but renders them using their respective framework patterns.

## Benefits of This Architecture

1. **🎯 Framework Parity**: Ensure all frameworks have feature parity
2. **🔄 Cross-framework Testing**: Easy to test the same functionality across frameworks
3. **📚 Documentation**: Each playground serves as framework-specific documentation
4. **🚀 Developer Experience**: Choose your preferred framework for development
5. **🧪 Integration Testing**: Test the core library with different UI implementations

## Migration Path

1. **Phase 1**: Keep current React playground (✅ Done)
2. **Phase 2**: Restructure to `playgrounds/react/` 
3. **Phase 3**: Add Vue bindings + playground
4. **Phase 4**: Add Svelte bindings + playground
5. **Phase 5**: Add Vanilla JS playground

This approach ensures your headless library truly works across all major frameworks while providing excellent developer experience for each ecosystem. 
