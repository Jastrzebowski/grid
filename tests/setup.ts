import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Clean up after each test
afterEach(() => {
  cleanup()
})

// Mock CSS Grid properties for testing
Object.defineProperty(window, 'CSS', {
  value: {
    supports: () => true,
  },
  writable: true,
})

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor(callback: ResizeObserverCallback) {
    this.callback = callback
  }
  callback: ResizeObserverCallback
  observe() {}
  unobserve() {}
  disconnect() {}
} 
