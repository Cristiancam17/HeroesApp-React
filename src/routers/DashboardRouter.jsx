import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';

function DashboardRouter() {
    return (
        <>
            <Routes>
                <Route path="one" element={<ScreenOne/>}></Route>
                <Route path="two" element={<ScreenTwo/>}></Route>
            </Routes>
        </>
        
    )
}

export default DashboardRouter