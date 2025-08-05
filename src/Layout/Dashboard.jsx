import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaUser, FaUtensils, FaVoicemail } from "react-icons/fa";

import { NavLink, Outlet } from 'react-router'
import { BsFillCartFill } from 'react-icons/bs';
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
const Dashboard = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();

    const navLinkClass = ({ isActive }) =>
        isActive
            ? ' bg-purple-600 text-white font-bold flex items-center gap-2'
            : 'flex items-center gap-2';

    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className="menu p-4 space-y-2">


                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome" className={navLinkClass}>
                                    <FaHome />
                                    Admin  Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems" className={navLinkClass}>
                                    <FaUtensils />
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems" className={navLinkClass}>
                                    <FaList />
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings" className={navLinkClass}>
                                    <FaAd />
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users" className={navLinkClass}>
                                    <FaUser />
                                    All Users
                                </NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome" className={navLinkClass}>
                                        <FaHome />
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/history" className={navLinkClass}>
                                        <FaCalendar />
                                        History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart" className={navLinkClass}>
                                        <BsFillCartFill />
                                        My Cart ({cart.length})
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review" className={navLinkClass}>
                                        <FaAd />
                                        Add a Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory" className={navLinkClass}>
                                        <FaList />
                                        Payment Real History
                                    </NavLink>
                                </li>
                            </>
                    }

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
                    <li>
                        <NavLink to="/order/salasd" >
                            <FaEnvelope />
                            Contact
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