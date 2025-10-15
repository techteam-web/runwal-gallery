

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Broucher from './components/Broucher,'
import Gallery from './components/Gallery'
import { StrictMode } from 'react'

function App() {
  
  

  return (
    <StrictMode>
  <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/broucher" element={<Broucher />} />
      
    </Routes>
    
  </BrowserRouter>
  </StrictMode>
  )
}

export default App
