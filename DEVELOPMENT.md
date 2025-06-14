# Development Guide

This document outlines the development workflow and architecture decisions for the Grid Layout Library.

## Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd grid
   pnpm install
   ```

2. **Development Commands**
   ```bash
   pnpm dev          # Start development mode
   pnpm build        # Build the library
   pnpm test         # Run tests
   pnpm test:ui      # Run tests with UI
   pnpm lint         # Lint code
   pnpm format       # Format code
   ```

## Architecture Philosophy

### Headless Design
Following the Tanstack pattern, the library is split into:
- **Core Logic**: Framework-agnostic grid engine
- **UI Bindings**: Framework-specific implementations (starting with React)

### Modern CSS Grid
- Leverages native CSS Grid for performance
- No JavaScript-based positioning calculations
- Minimal runtime overhead

### TypeScript First
- Full type safety throughout
- Excellent IntelliSense support
- Self-documenting API through types

### Dependency
- Keep dependency to bare minimum

## Project Structure

```
├── src/
│   ├── index.ts              # Main entry point (core)
│   ├── core/                 # Framework-agnostic logic
│   │   └── index.ts          # Grid engine and core functionality
│   ├── types/                # Core TypeScript interfaces
│   │   └── index.ts          # Grid-related types
│   ├── utils/                # Utility functions
│   │   └── index.ts          # Helper functions
│   └── react/                # React bindings
│       ├── index.ts          # React entry point
│       ├── hooks/            # Custom React hooks
│       ├── components/       # React components
│       └── types/            # React-specific types
├── tests/                    # Test files
├── dist/                     # Built output
└── docs/                     # Documentation
```

## Development Workflow

### Making Changes
1. Create a feature branch from `main`
2. Make your changes with proper TypeScript types
3. Add tests for new functionality
4. Ensure linting and formatting pass
5. Create a changeset for versioning

### Testing
- Unit tests with Vitest
- React Testing Library for React components
- Coverage reports available

### Versioning
Using Changesets for semantic versioning:
```bash
pnpm changeset        # Create a changeset
pnpm version          # Update versions
pnpm release          # Publish to npm
```

## Build System

### Vite Configuration
- Dual ESM/CJS output
- TypeScript declaration files
- Tree-shaking optimized
- Source maps included

### Bundle Strategy
- Core library: `dist/index.js` and `dist/index.cjs`
- React bindings: `dist/react.js` and `dist/react.cjs`
- Type definitions: `dist/*.d.ts`

## Code Style

### TypeScript
- Strict mode enabled
- Prefer `interface` over `type` for object shapes
- Use proper generic constraints
- Document complex types with JSDoc

### React
- Functional components with hooks
- Proper dependency arrays for useEffect
- Forward refs where appropriate
- Proper prop typing

### General
- Prefer composition over inheritance
- Keep functions pure where possible
- Use descriptive variable names
- Add comments for complex logic

## Performance Considerations

### CSS Grid Over JavaScript
- Let the browser handle layout calculations
- Minimize JavaScript grid positioning
- Use CSS custom properties for dynamic values

### Bundle Size
- Tree-shakable exports
- Optional peer dependencies
- Minimal runtime overhead

### Runtime Performance
- Efficient state updates
- Proper memoization in React hooks
- Avoid unnecessary re-renders

## Next Steps

### Core Implementation
1. Define the grid state management system
2. Implement CSS Grid integration
3. Add drag-and-drop functionality
4. Create resize handling
5. Add collision detection

### React Integration
1. Create useGrid hook
2. Build GridContainer component
3. Build GridItem component
4. Add event handling
5. Implement accessibility features

### Advanced Features
1. Responsive grid layouts
2. Animation support
3. Persistence layer
4. Undo/redo functionality
5. Performance optimizations 
