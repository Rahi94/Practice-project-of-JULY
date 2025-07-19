import React from 'react';

const Register = () => {

    const handleRegister = (event) => {
        event.preventDefault();
        console.log(event.target.email.value)
    }

    return (
        <div>
            <h3 className="text-3xl">Register</h3>
            <form onSubmit={handleRegister}>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register now!</h1>

                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>


            </form>
        </div>
    );
};

export default Register;