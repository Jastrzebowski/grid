// Shared example definitions for all framework playgrounds
// This ensures consistency across React, Vue, Svelte, and Vanilla JS playgrounds

export interface GridExampleItem {
  id: string
  content: string
  color: string
  span?: 'small' | 'medium' | 'large' | 'full' | 'normal'
}

export interface GridExample {
  id: string
  title: string
  description: string
  items: GridExampleItem[]
}

export const basicGridExample: GridExample = {
  id: 'basic',
  title: 'Basic Grid Layout',
  description: 'A simple 3x3 grid with basic positioning',
  items: [
    { id: '1', content: 'Item 1', color: '#ff6b6b' },
    { id: '2', content: 'Item 2', color: '#4ecdc4' },
    { id: '3', content: 'Item 3', color: '#45b7d1' },
    { id: '4', content: 'Item 4', color: '#96ceb4' },
    { id: '5', content: 'Item 5', color: '#feca57' },
    { id: '6', content: 'Item 6', color: '#ff9ff3' },
  ]
}

export const dashboardExample: GridExample = {
  id: 'dashboard',
  title: 'Dashboard Layout',
  description: 'Complex dashboard with various widget sizes',
  items: [
    { id: 'header', content: 'Header Widget', color: '#667eea', span: 'full' },
    { id: 'chart1', content: 'Chart Widget', color: '#764ba2', span: 'large' },
    { id: 'stats', content: 'Stats', color: '#f093fb', span: 'small' },
    { id: 'table', content: 'Data Table', color: '#f5576c', span: 'medium' },
    { id: 'chart2', content: 'Pie Chart', color: '#4facfe', span: 'small' },
    { id: 'notifications', content: 'Notifications', color: '#43e97b', span: 'small' },
  ]
}

export const responsiveExample: GridExample = {
  id: 'responsive',
  title: 'Responsive Grid',
  description: 'Grid that adapts to different screen sizes',
  items: [
    { id: 'main', content: 'Main Content', color: '#667eea' },
    { id: 'sidebar', content: 'Sidebar', color: '#764ba2' },
    { id: 'footer', content: 'Footer', color: '#f093fb' },
  ]
}

export const dragDropExample: GridExample = {
  id: 'drag-drop',
  title: 'Drag & Drop Grid',
  description: 'Interactive grid with drag and drop (Coming Soon)',
  items: [
    { id: 'drag1', content: 'Draggable Item 1', color: '#ff6b6b' },
    { id: 'drag2', content: 'Draggable Item 2', color: '#4ecdc4' },
    { id: 'drag3', content: 'Draggable Item 3', color: '#45b7d1' },
    { id: 'drag4', content: 'Draggable Item 4', color: '#96ceb4' },
  ]
}

export const customExample: GridExample = {
  id: 'custom',
  title: 'Custom Layout',
  description: 'Build your own custom grid layout',
  items: [
    { id: 'custom1', content: 'Custom Item 1', color: '#feca57' },
    { id: 'custom2', content: 'Custom Item 2', color: '#ff9ff3' },
  ]
}

export const allExamples: GridExample[] = [
  basicGridExample,
  dashboardExample,
  responsiveExample,
  dragDropExample,
  customExample,
]

export function getExampleById(id: string): GridExample | undefined {
  return allExamples.find(example => example.id === id)
} 
