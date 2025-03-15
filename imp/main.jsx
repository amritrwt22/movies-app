import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//importing browser router ...
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <App/>
    </BrowserRouter>

    {/* <App />  we will put this inside react router dom , so we can do routing*/}
  </StrictMode>
)
