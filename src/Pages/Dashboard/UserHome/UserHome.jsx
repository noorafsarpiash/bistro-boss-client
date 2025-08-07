
import useAuth from '../../../Hooks/useAuth'

const UserHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <h2 className="text-3xl">
                <span>User Home</span>
                {
                    user?.displayName ? <span className='text-2xl text-blue-500'> {user.displayName}</span> : <span className='text-2xl text-blue-500'> User</span>
                }
            </h2>
        </div>
    )
}

export default UserHome