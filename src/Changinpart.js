import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Analysis from './Analysis';
import Daily from './Daily';
export default function Changinpart() {
  return (
    <div>
      <Routes>
          <Route path="/"></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/Analysis" element={<Analysis></Analysis>}></Route>
          <Route path="/Daily" element={<Daily></Daily>}></Route>
        </Routes>
    </div>
  )
}
