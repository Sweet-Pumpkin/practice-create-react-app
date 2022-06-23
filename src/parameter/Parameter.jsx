import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Item from './Item'

export default function Parameter() {
  return (
    <BrowserRouter>
      <Link to="/">home</Link>
      <Link to="/item/:key">item</Link>
      <Routes>
        <Route path='/' element={<div>home</div>} />
        <Route path='/item/:id' element={<Item />} />
      </Routes>
    </BrowserRouter>
  )
}
