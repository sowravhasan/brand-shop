import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from './../AuthProvider/AuthProvider';
import Navbar from "../Navbar/Navbar";


const Signup = () => {
    const {signUp} = useContext(AuthContext)

    const [signupError, setSignupError] = useState('')
    const [success, setSuccess] = useState('')
    const [six, setSix] = useState('')
    const [capital, setCapital] = useState('')
    const [special, setSpecial] = useState('')

    const handleSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        if(password.length < 6){
            setSix('Password should be above 6 characters.');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setCapital('Add any capital letter!');
            return;
        }
        else if(!/[!@#$%^&*]/.test(password)){
            setSpecial('Password should have at least one Special Character!');
            return;
        }


        setSuccess('')
        setSignupError('')
        setSix('')
        setCapital('')
        setSpecial('')
        
        signUp(email, password)
        .then(result => {
            console.log(result.user);
            setSuccess('User created successfully')
        })
        .catch(error => {
            console.error(error);
            setSignupError(error.message)
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
                <h1 className="font-bold text-3xl mb-10 text-center">Register Your Account</h1>
                <form onSubmit={handleSignUp}>
                <div>
                    <p className="font-semibold mb-3">Your Name</p>
                    <input className="p-2 rounded-md mb-3 w-full" type="text" name="name" placeholder="Enter your full name" />
                </div>
                <div>
                    <p className="font-semibold mb-3">Photo URL</p>
                    <input className="p-2 rounded-md mb-3 w-full" type="text" name="photo" placeholder="Enter your pgoto url" />
                </div>
                <div>
                    <p className="font-semibold mb-3">Email Address</p>
                    <input className="p-2 rounded-md mb-3 w-full" type="email" name="email" placeholder="Enter your email address" />
                </div>
                <div>
                    <p className="font-semibold mb-3">Password</p>
                    <input className="p-2 rounded-md mb-8 w-full" type="password" name="password" placeholder="Enter your email password" />
                </div>
                {
                    signupError && <div className="mb-3">
                    <div className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>User already exists</span>
                    </div>
                    
                </div>
                }
                {
                    success && <div className="mb-3">
                    <div className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>User Created Successfully!</span>
                    </div>
                    
                </div>
                }
                {
                    six && <div className="mb-3">
                   <div className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Password should be at least 6 characters.</span>
                    </div>
                    
                </div>
                }
                {
                    capital && <div className="mb-3">
                   <div className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Password should have at least 1 capital letter!</span>
                    </div>
                    
                </div>
                }
                {
                    special && <div className="mb-3">
                   <div className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Password should have at least one Special Character!</span>
                    </div>
                    
                </div>
                }
                <button className="bg-slate-900 p-3 rounded-md text-white w-full mb-3">Register</button>
                </form>
                
                <p className="text-center mt-4">Already Have An Account ? <Link to={"/signin"} className="text-[#D72050] font-semibold">Signin</Link></p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Signup;