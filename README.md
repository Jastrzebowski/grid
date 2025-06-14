# Grid Layout Library

A modern, headless grid layout library built with CSS Grid and TypeScript. Inspired by the flexibility of Tanstack libraries, this library provides a framework-agnostic core with React bindings.

## Features

- 🎯 **Headless Architecture**: Framework-agnostic core with specific UI bindings
- 🔧 **Modern CSS Grid**: Built on top of native CSS Grid for optimal performance
- 📝 **TypeScript First**: Full type safety and excellent developer experience  
- ⚡ **Zero Dependencies**: Core library has no external dependencies
- 🎨 **Flexible**: Extensible design following Tanstack patterns
- 🧪 **Well Tested**: Comprehensive test coverage with Vitest

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Run tests
pnpm test

# Build the library
pnpm build
```

## Architecture

The library follows a headless architecture pattern:

- **`@grid/core`**: Framework-agnostic grid logic and state management
- **`@grid/react`**: React-specific hooks and components

## Development

This project uses modern tooling:

- **Build**: Vite with TypeScript
- **Testing**: Vitest with jsdom
- **Linting**: ESLint with TypeScript rules
- **Formatting**: Prettier
- **Versioning**: Changesets for semantic versioning

## Package Structure

```
src/
├── core/           # Headless grid engine
├── types/          # Core TypeScript types
├── utils/          # Utility functions
└── react/          # React bindings
    ├── hooks/      # Custom React hooks
    ├── components/ # React components
    └── types/      # React-specific types
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

MIT License - see [LICENSE](./LICENSE) for details.
