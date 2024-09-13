import React from 'react'
// import Header from './components/Header'
import { Outlet } from 'react-router-dom'

import './App.css'
import Header from './component/Header'

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}