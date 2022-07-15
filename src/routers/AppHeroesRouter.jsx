import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../screens/Login';
import DashboardRouter from './DashboardRouter';

function AppHeroesRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<DashboardRouter/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppHeroesRouter