# Grid Layout Playground

This is the development playground for the Grid Layout Library. It provides a visual interface to test and develop grid functionality.

## Usage

Start the playground:

```bash
pnpm dev
```

This will open your browser to `http://localhost:3000` with the playground interface.

## Features

- **Example Selector**: Choose from different grid layout examples
- **Live Preview**: See your grid layouts in real-time
- **Interactive Controls**: Add items, reset layouts, and export configurations
- **Responsive Design**: Test how your grids behave on different screen sizes

## Examples

### Basic Grid
A simple 3x3 grid layout with basic positioning - perfect for getting started.

### Dashboard Layout
A complex dashboard layout with various widget sizes to demonstrate advanced grid capabilities.

### Responsive Grid
Shows how grids can adapt to different screen sizes and orientations.

### Drag & Drop (Coming Soon)
Interactive grid with drag and drop functionality for rearranging items.

### Custom Layout
A blank canvas for creating your own custom grid layouts.

## Development

The playground imports the grid library directly from the source code, so any changes you make to the library will be immediately reflected in the playground.

## File Structure

```
playground/
├── index.html          # Entry HTML file
├── src/
│   ├── main.tsx        # React entry point
│   ├── App.tsx         # Main app component
│   ├── App.css         # App styles
│   ├── index.css       # Global styles
│   └── components/     # Playground components
│       ├── ExampleSelector.tsx
│       ├── ExampleSelector.css
│       ├── GridPlayground.tsx
│       └── GridPlayground.css
└── public/
    └── vite.svg        # Vite icon
```

## Adding New Examples

To add a new example:

1. Add it to the `examples` array in `ExampleSelector.tsx`
2. Add a new case to the `getExampleContent` function in `GridPlayground.tsx`
3. Define the grid items and their properties

The playground will automatically pick up your new example and make it available in the selector. 
