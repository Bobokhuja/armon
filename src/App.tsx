import React from 'react'
import classes from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './views/Home/Home'

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
