import { GridItemProps } from '../types'

export function GridItem({ children, id }: GridItemProps) {
  return (
    <div className="grid-item" data-grid-id={id}>
      {children}
    </div>
  )
}
