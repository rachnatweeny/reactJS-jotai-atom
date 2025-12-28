import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'jotai'
import App from './App'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
)
