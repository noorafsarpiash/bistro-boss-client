
import { FaGoogle } from 'react-icons/fa'
import useAuth from '../../Hooks/useAuth'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }

                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate("/");
                    })
            })
    }
    return (
        <div className='p-8'>
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSingIn} className="btn  w-full">
                    <FaGoogle className='mr-2 text-xl' />
                    Google
                </button>
            </div>
        </div>
    )
}

export default SocialLogin