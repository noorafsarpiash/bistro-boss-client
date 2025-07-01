import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Pages/Shared/Footer/Footer'
import NavBar from '../Pages/Shared/Navbar/NavBar'

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main