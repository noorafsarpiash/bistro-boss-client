import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);


    const { signIn } = useContext(AuthContext);

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
            })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
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
                                <input ref={captchaRef} type="text" name="captcha" className="input" placeholder="type the text above" />
                                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2 ">Validate</button>


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