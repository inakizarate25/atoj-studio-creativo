import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LangProvider } from './context/langContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LangProvider>
    <App />
  </LangProvider>,
)
