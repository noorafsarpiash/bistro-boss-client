import { FaAd, FaCalendar, FaHome, FaList, FaSearch } from "react-icons/fa";

import { NavLink, Outlet } from 'react-router'
import { BsFillCartFill } from 'react-icons/bs';
const Dashboard = () => {

    const navLinkClass = ({ isActive }) =>
        isActive
            ? ' bg-purple-600 text-white font-bold flex items-center gap-2'
            : 'flex items-center gap-2';

    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className="menu p-4 space-y-2">
                    <li>
                        <NavLink to="/dashboard/userHome" className={navLinkClass}>
                            <FaHome />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation" className={navLinkClass}>
                            <FaCalendar />
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart" className={navLinkClass}>
                            <BsFillCartFill />
                            My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review" className={navLinkClass}>
                            <FaAd />
                            Add a Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings" className={navLinkClass}>
                            <FaList />
                            My Bookings
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/" >
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salasd" >
                            <FaSearch />
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;