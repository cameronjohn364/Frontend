import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Landing_Page_App from "./Projects/Landing_Page/MainFiles/Landing_Page_App"
import Binance_Data_Base_App from './Projects/Binance_Data_Base/mainFiles/Binance_Data_Base_App'
import Ebook_Reader_App from "./Projects/Ebook_Reader/MainFiles/Ebook_Reader_App"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Landing_Page_App/>}/>
      <Route path="/Binance_Data_Base" element={<Binance_Data_Base_App/>}/>
      <Route path="/Ebook_Reader" element={<Ebook_Reader_App/>}/>

    </Routes>
  </BrowserRouter>
)
