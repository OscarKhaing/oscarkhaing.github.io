import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import DefaultApp from './defaultApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <DefaultApp /> */}
    <App />
  </StrictMode>,
)
