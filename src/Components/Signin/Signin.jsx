import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Navbar/Navbar";


const Signin = () => {
    const {signIn, googleSignUp} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [signinError, setSigninError] = useState('')
    console.log(signinError);

    const handleSignin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            console.log(result);
            navigate(location ?.state ? location.state : '/');
        })
        .then(error => {
            console.log(error);
            setSigninError(error.code)
            return;
        })
        
    }

    const signInGoogle = () => {
        googleSignUp()
        .then(result => {
            console.log(result.user);
            navigate(location ?.state ? location.state : '/');
            // setSuccess('User created successfully')
        })
        .catch(error => {
            console.error(error);
            // setSignupError(error.message)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
             <div className="max-w-6xl mx-auto mt-10">
            </div>
            
            <div className="px-10 py-10 md:px-96 md:py-20">
            <div className="bg-slate-200 p-10 rounded-md">
                <h1 className="font-bold text-3xl mb-10 text-center bg-gradient-to-br from-yellow-300  to-red-600 bg-clip-text text-transparent dark:text-orange-500">Login Your Account</h1>
                <form onSubmit={handleSignin}>
                <div>
                    <p className="font-semibold mb-3">Email Address</p>
                    <input className="p-2 rounded-md mb-3 w-full" type="email" name="email" placeholder="Enter your email address" />
                </div>
                <div>
                    <p className="font-semibold mb-3">Password</p>
                    <input className="p-2 rounded-md mb-8 w-full" type="password" name="password" placeholder="Enter your email password" />
                </div>
                <div>
                {
                    signinError && <div className="mb-3">
                   <div className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{signinError}</span>
                    </div>
                    
                </div>
                }
                </div>
                <button className="bg-slate-900 p-3 rounded-md text-white w-full mb-3">Login</button>
                </form>
                <button onClick={signInGoogle} className="bg-slate-900 p-3 rounded-md text-white w-full">Signin With Google</button>
                <p className="text-center mt-4">Dont’t Have An Account ? <Link to={"/signup"} className="text-orange-500 font-semibold">Sign Up</Link></p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Signin;