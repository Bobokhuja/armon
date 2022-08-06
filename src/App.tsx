import React from 'react'
import classes from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index />
        </Route>
      </Routes>
    </div>
  )
}

export default App
