import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Context from "./Context/Context.jsx";


import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </StrictMode>
);
