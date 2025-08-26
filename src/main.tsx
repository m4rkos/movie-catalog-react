import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css';
import './styles/index.scss'
import App from './app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
