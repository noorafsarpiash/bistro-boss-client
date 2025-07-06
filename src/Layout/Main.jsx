import React from 'react'
import { Outlet, useLocation } from 'react-router'
import Footer from '../Pages/Shared/Footer/Footer'
import NavBar from '../Pages/Shared/Navbar/NavBar'

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes("login")
    return (
        <div>
            {noHeaderFooter || <NavBar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    )
}

export default Main