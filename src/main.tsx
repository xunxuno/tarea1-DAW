import React from 'react'
import ReactDoom from 'react-dom/client'
import Calculator from './Calculator.tsx'
//import './index.css'

ReactDoom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
);
