import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ArtCrimes from './components/art-crimes'
import WantedPage from './components/wanted-page'

function App() {

  return (
  <BrowserRouter>
<Routes>
<Route path="/" element={ <WantedPage /> } />
<Route path="/art-crimes" element={ <ArtCrimes />} />
</Routes>
  </BrowserRouter>
  )
}

export default App
