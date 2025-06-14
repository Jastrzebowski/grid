import React, { useState } from 'react'
import { GridPlayground } from './components/GridPlayground'
import { ExampleSelector } from './components/ExampleSelector'
import './App.css'

const App: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState('basic')

  return (
    <div className="app">
      <header className="app-header">
        <h1>🔲 Grid Layout Playground</h1>
        <p>A modern, headless grid layout library playground</p>
      </header>

      <div className="app-content">
        <aside className="app-sidebar">
          <ExampleSelector
            selectedExample={selectedExample}
            onExampleChange={setSelectedExample}
          />
        </aside>

        <main className="app-main">
          <GridPlayground selectedExample={selectedExample} />
        </main>
      </div>
    </div>
  )
}

export default App 
