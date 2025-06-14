# Framework Playgrounds

This directory contains framework-specific playgrounds for the Grid Layout Library. Each playground demonstrates the library's capabilities within its respective framework ecosystem.

## 🎯 Architecture

### Per-Framework Organization
```
playgrounds/
├── react/              # React playground
│   ├── package.json    # React-specific dependencies
│   ├── vite.config.ts  # React Vite configuration
│   ├── tsconfig.json   # React TypeScript config
│   └── src/            # React app source
└── [future frameworks] # Vue, Svelte, Vanilla JS
```

### Benefits
- **🔧 Framework-specific tooling** (each has its own build config)
- **📦 Isolated dependencies** (no version conflicts)
- **⚡ Focused development** (only what you need)
- **🎯 Clear separation** between framework implementations

## 🚀 Quick Start

### React Playground
```bash
# From project root
pnpm dev                # Starts React playground
pnpm dev:react         # Same as above

# Or directly in playground
cd playgrounds/react
pnpm install
pnpm dev
```

### Future Frameworks
```bash
# When implemented
pnpm dev:vue           # Vue playground
pnpm dev:svelte        # Svelte playground
pnpm dev:vanilla       # Vanilla JS playground
pnpm dev:all           # All playgrounds simultaneously
```

## 📋 Available Examples

All playgrounds share the same examples (defined in `shared/examples/`):

### Basic Grid
- **Purpose**: Simple 3x3 grid layout
- **Best for**: Getting started, basic positioning
- **Items**: 6 colorful grid items

### Dashboard Layout
- **Purpose**: Complex dashboard with various widget sizes
- **Best for**: Real-world layout scenarios
- **Items**: Header, charts, stats, tables with different spans

### Responsive Grid
- **Purpose**: Adaptive layouts for different screen sizes
- **Best for**: Testing responsive behavior
- **Items**: Main content, sidebar, footer

### Drag & Drop (Coming Soon)
- **Purpose**: Interactive grid manipulation
- **Best for**: Testing drag-and-drop functionality
- **Items**: Draggable and rearrangeable items

### Custom Layout
- **Purpose**: Blank canvas for experimentation
- **Best for**: Building custom configurations
- **Items**: Minimal starting point

## 🔗 Library Integration

### Import Strategy
Each playground imports the library using clean aliases:

```typescript
// React playground
import { useGrid } from '@grid/react'
import { GridContainer, GridItem } from '@grid/react'

// Vue playground (future)
import { useGrid } from '@grid/vue'
import { GridContainer, GridItem } from '@grid/vue'
```

### Live Development
- **Hot reload** - Changes to library source reflect immediately
- **Type checking** - Full TypeScript support across playgrounds
- **Source maps** - Debug library code directly from playground

## 🎨 Shared Resources

### Examples (`shared/examples/`)
- Framework-agnostic example definitions
- Consistent data across all playgrounds
- Type-safe example configurations

### Styles (Future: `shared/styles/`)
- Common playground styling
- Framework-agnostic CSS
- Consistent visual experience

## 🛠 Development Workflow

### Adding New Examples
1. Define example in `shared/examples/index.ts`
2. Export from `allExamples` array
3. Examples automatically appear in all playgrounds

### Adding New Framework Playground
1. Create new directory: `playgrounds/[framework]/`
2. Add framework-specific `package.json`
3. Configure build tools (`vite.config.ts`, `tsconfig.json`)
4. Implement framework-specific components
5. Add script to root `package.json`

### Testing Across Frameworks
```bash
# Test the same functionality across frameworks
pnpm dev:react   # Port 3000
pnpm dev:vue     # Port 3001 (future)
pnpm dev:svelte  # Port 3002 (future)

# Or all at once
pnpm dev:all
```

## 📊 Framework Status

| Framework | Status | Port | Notes |
|-----------|--------|------|-------|
| React     | ✅ Active | 3000 | Primary development playground |
| Vue       | 🔄 Planned | 3001 | Coming with Vue bindings |
| Svelte    | 🔄 Planned | 3002 | Coming with Svelte bindings |
| Vanilla   | 🔄 Planned | 3003 | Pure JavaScript implementation |

## 🎯 Goals

1. **Framework Parity**: Ensure identical functionality across all frameworks
2. **Developer Experience**: Provide excellent playground for each ecosystem
3. **Documentation**: Each playground serves as living documentation
4. **Testing**: Validate headless architecture works everywhere
5. **Examples**: Demonstrate best practices for each framework

This architecture ensures the Grid Layout Library truly delivers on its headless promise while providing framework-specific developer experiences that feel native to each ecosystem. 
