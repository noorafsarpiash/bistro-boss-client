import React from 'react'
import useAuth from '../../../Hooks/useAuth'

const AdminHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className="h2-text-3xl">
                <span>Hi, Welcome</span>
                {
                    user?.displayName ? <span className='text-2xl text-blue-500'> {user.displayName}</span> : <span className='text-2xl text-blue-500'> Admin</span>
                }
            </div>
        </div>
    )
}

export default AdminHome