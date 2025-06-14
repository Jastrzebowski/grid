import './ExampleSelector.css'

interface ExampleSelectorProps {
  selectedExample: string
  onExampleChange: (example: string) => void
}

const examples = [
  {
    id: 'basic',
    name: 'Basic Grid',
    description: 'Simple 3x3 grid layout with basic items'
  },
  {
    id: 'dashboard',
    name: 'Dashboard Layout',
    description: 'Complex dashboard with various widget sizes'
  },
  {
    id: 'responsive',
    name: 'Responsive Grid',
    description: 'Grid that adapts to different screen sizes'
  },
  {
    id: 'drag-drop',
    name: 'Drag & Drop',
    description: 'Interactive grid with drag and drop functionality'
  },
  {
    id: 'custom',
    name: 'Custom Layout',
    description: 'Build your own custom grid layout'
  }
]

export const ExampleSelector = ({
  selectedExample,
  onExampleChange
}: ExampleSelectorProps) => {
  return (
    <div className="example-selector">
      <h3>Examples</h3>
      <div className="example-list">
        {examples.map((example) => (
          <button
            key={example.id}
            className={`example-item ${
              selectedExample === example.id ? 'active' : ''
            }`}
            onClick={() => onExampleChange(example.id)}
          >
            <div className="example-name">{example.name}</div>
            <div className="example-description">{example.description}</div>
          </button>
        ))}
      </div>
    </div>
  )
} 
