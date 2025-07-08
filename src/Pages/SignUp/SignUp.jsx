import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const { createUser } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            });
    };



    return (


        <>

            <Helmet>
                <title>Bistro Boss | Sign Up</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>


            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <fieldset className="fieldset">


                                <label className="label">Name</label>
                                <input type="name"  {...register("name", { required: true })} name='name' className="input" placeholder="Name" />
                                {errors.name && <span className="text-red-600">Name is required</span>}


                                <label className="label">Email</label>
                                <input type="email"  {...register("email", { required: true })} name='email' className="input" placeholder="Email" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                                <label className="label">Password</label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name='password' className="input" placeholder="Password" />



                                {errors.password?.type === "required" && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === "minLength" && <span className="text-red-600">Password must be between 6 and 20 characters</span>}
                                {errors.password?.type === "pattern" && <span className="text-red-600">Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character</span>}


                                <div><a className="link link-hover">Forgot password?</a></div>
                                <input className="btn btn-neutral mt-4" type="submit" value="Sign Up" />

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </>


    )
}

export default SignUp