import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashbord } from './components/Dashbord/Dashbord';
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbord />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
