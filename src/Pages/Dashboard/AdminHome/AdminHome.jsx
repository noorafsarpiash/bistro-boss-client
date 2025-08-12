import { FaDollarSign, FaUser } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";

import useAuth from '../../../Hooks/useAuth'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const AdminHome = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin-stats");
            return res.data;
        }
    });

    return (
        <div>
            <div className="h2-text-3xl">
                <span>Hi, Welcome</span>
                {
                    user?.displayName ? <span className='text-2xl text-blue-500'> {user.displayName}</span> : <span className='text-2xl text-blue-500'> Admin</span>
                }
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className="text-3xl" />

                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats?.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUser className="text-3xl" />
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats?.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaAddressBook className="text-3xl" />

                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{stats?.menuItems}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats?.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>



                import {FaDollarSign, FaUser, FaAddressBook} from "react-icons/fa";

                export default function DashboardStats({user, stats}) {
  const statItems = [
                {
                    icon: <FaDollarSign className="text-3xl text-secondary" />,
                title: "Revenue",
                value: `$${stats?.revenue}`,
                desc: "Jan 1st - Feb 1st",
    },
                {
                    icon: <FaUser className="text-3xl text-secondary" />,
                title: "Users",
                value: stats?.users,
                desc: "↗︎ 400 (22%)",
    },
                {
                    icon: <FaAddressBook className="text-3xl text-secondary" />,
                title: "Menu Items",
                value: stats?.menuItems,
                desc: "↘︎ 90 (14%)",
    },
                {
                    icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 stroke-current text-secondary"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    ></path>
                </svg>
                ),
                title: "Orders",
                value: stats?.orders,
                desc: "↘︎ 90 (14%)",
    },
                ];

                return (
                <div>
                    <div className="text-3xl font-semibold mb-6">
                        <span>Hi, Welcome </span>
                        <span className="text-2xl text-blue-500">
                            {user?.displayName || "Admin"}
                        </span>
                    </div>

                    <div className="stats shadow flex flex-wrap gap-4">
                        {statItems.map((item, idx) => (
                            <div key={idx} className="stat">
                                <div className="stat-figure">{item.icon}</div>
                                <div className="stat-title">{item.title}</div>
                                <div className="stat-value">{item.value}</div>
                                <div className="stat-desc">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
                );
}












            </div>
















        </div>
    )
}

export default AdminHome