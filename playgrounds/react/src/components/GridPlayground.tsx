import { useGrid } from '@grid/react'
import { GridContainer, GridItem } from '@grid/react'
import './GridPlayground.css'

interface GridPlaygroundProps {
  selectedExample: string
}

interface ExampleItem {
  id: string
  content: string
  color: string
  span?: string
}

const getExampleContent = (example: string): { title: string; description: string; items: ExampleItem[] } => {
  switch (example) {
    case 'basic':
      return {
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
    
    case 'dashboard':
      return {
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
    
    case 'responsive':
      return {
        title: 'Responsive Grid',
        description: 'Grid that adapts to different screen sizes',
        items: [
          { id: 'main', content: 'Main Content', color: '#667eea' },
          { id: 'sidebar', content: 'Sidebar', color: '#764ba2' },
          { id: 'footer', content: 'Footer', color: '#f093fb' },
        ]
      }
    
    case 'drag-drop':
      return {
        title: 'Drag & Drop Grid',
        description: 'Interactive grid with drag and drop (Coming Soon)',
        items: [
          { id: 'drag1', content: 'Draggable Item 1', color: '#ff6b6b' },
          { id: 'drag2', content: 'Draggable Item 2', color: '#4ecdc4' },
          { id: 'drag3', content: 'Draggable Item 3', color: '#45b7d1' },
          { id: 'drag4', content: 'Draggable Item 4', color: '#96ceb4' },
        ]
      }
    
    case 'custom':
      return {
        title: 'Custom Layout',
        description: 'Build your own custom grid layout',
        items: [
          { id: 'custom1', content: 'Custom Item 1', color: '#feca57' },
          { id: 'custom2', content: 'Custom Item 2', color: '#ff9ff3' },
        ]
      }
    
    default:
      return {
        title: 'Basic Grid Layout',
        description: 'A simple grid layout',
        items: []
      }
  }
}

export const GridPlayground = ({ selectedExample }: GridPlaygroundProps) => {
  const { gridState } = useGrid()
  const example = getExampleContent(selectedExample)

  return (
    <div className="grid-playground">
      <div className="playground-header">
        <h2>{example.title}</h2>
        <p>{example.description}</p>
        <div className="playground-info">
          <span className="info-item">
            <strong>Grid State:</strong> {gridState ? 'Active' : 'Inactive'}
          </span>
          <span className="info-item">
            <strong>Items:</strong> {example.items.length}
          </span>
        </div>
      </div>

      <div className="playground-content">
        <GridContainer>
          {example.items.map((item) => (
            <GridItem key={item.id} id={item.id}>
              <div 
                className={`grid-demo-item ${item.span || 'normal'}`}
                style={{ backgroundColor: item.color }}
              >
                <div className="item-content">
                  <h4>{item.content}</h4>
                  <span className="item-id">ID: {item.id}</span>
                </div>
              </div>
            </GridItem>
          ))}
        </GridContainer>
      </div>

      <div className="playground-controls">
        <button className="control-button">
          Add Item
        </button>
        <button className="control-button">
          Reset Layout
        </button>
        <button className="control-button">
          Export Config
        </button>
      </div>
    </div>
  )
} 
