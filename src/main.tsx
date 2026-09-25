import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/App'
import './index.css'
import './fonts.css'

// Set the theme to forest for a calming green-based palette suitable for a yoga studio
document.documentElement.dataset.theme = "forest"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)