import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Login = () => {

    const [disabled, setDisabled] = useState(true);


    const { signIn } = useContext(AuthContext);

    const nagigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log("state in the location login page", location.state)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "User Login Successfully",
                    showClass: {
                        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
                    },
                    hideClass: {
                        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
                    }
                });

                nagigate(from, { replace: true });

            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    return (
        <>

            <Helmet>
                <title>Bistro Boss | Login</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>


            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2  lg:text-left ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>


                                <label className="label"> <LoadCanvasTemplate /></label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" className="input" placeholder="type the text above" />



                                <input
                                    disabled={disabled}
                                    className="btn btn-neutral mt-4" type="submit" value="Login" />

                            </fieldset>
                        </form>
                        <p><small>New to our platform? <Link to="/signup">Create an account</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login