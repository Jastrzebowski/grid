import { GridContainerProps } from '../types'

export function GridContainer({ children }: GridContainerProps) {
  return (
    <div 
      className="grid-container" 
      style={{ 
        display: 'grid', 
        gap: '1rem', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' 
      }}
    >
      {children}
    </div>
  )
} 
