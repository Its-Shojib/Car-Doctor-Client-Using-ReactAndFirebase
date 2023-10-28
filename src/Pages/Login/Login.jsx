import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import swal from 'sweetalert';
import { AuthContext } from "../../AuthProvider/AuthProvier";
import img from '../../../public/assets/images/login/login.svg'
import axios from "axios";

const Login = () => {
    let [showPassword, setShowPassword] = useState(false);
    let { SignInUser, googleSignIn, githubSignIn } = useContext(AuthContext)
    let navigate = useNavigate()
    let location = useLocation();

    let handleLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        SignInUser(email, password)
            .then(result => {
                let loggedInUser = result.user
                console.log(loggedInUser);
                swal("Good job!", "Sign-in Successfuly!", "success");

                // get access token
                let user = { email };
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res =>{
                        if(res.data.success) {
                            navigate(location.state ? location.state : '/');
                        }
                    }  
                );
            })
            .catch(error => {
                swal("Error!", error.message, "error");
            })
    }
    let handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                swal("Good job!", "Sign-in Successfuly!", "success");
                navigate(location.state ? location.state : '/');
            })
            .catch(error => {
                swal("Error!", error.message, "error");
            })

    }
    let handleGithubLogin = () => {
        githubSignIn()
            .then(result => {
                let loggedInUser = result.user
                console.log(loggedInUser);
                swal("Good job!", "Sign-in Successfuly!", "success");
                navigate(location.state ? location.state : '/');

            })
            .catch(error => {
                swal("Error!", error.message, "error");
            })
    }

    return (
        <div className='flex justify-center items-center gap-10 flex-col md:flex-row'>
            <div>
                <img src={img} alt="" />
            </div>

            <div className="w-full md:w-4/12 text-center px-10 py-5 rounded-lg border border-black">
                <h2 className="text-3xl font-bold">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">User Email</p>
                        <AiOutlineMail className="absolute bottom-4 left-2"></AiOutlineMail>
                        <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                            type="email"
                            name="email"
                            placeholder="Type your email"
                            required />
                    </div>
                    <hr className="my-3" />
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">Password</p>
                        <RiLockPasswordFill className="absolute bottom-4 left-2"></RiLockPasswordFill>
                        <input className="w-full p-2 pl-6 text-black rounded-lg my-1"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Type your password"
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 bottom-4">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                    </div>
                    <hr className="my-3" />
                    <p className="cursor-pointer text-right underline my-3">Forgot password?</p>

                    <button
                        className="bg-[#FF3811] w-full py-2 text-white font-semibold text-lg rounded-xl" type="submit">
                        Login</button>

                </form>

                <p className="mt-2">Or Sign up using</p>
                <div className="flex gap-3 justify-center my-3">
                    <img onClick={handleGoogleLogin} className="w-8 cursor-pointer" src="/google.jpg" alt="" />
                    <img onClick={handleGithubLogin} className="w-8 cursor-pointer" src="/GitHub-Mark.png" alt="" />
                </div>
                <div className="flex gap-3 justify-center mt-5">
                    <p>New to this site?</p>
                    <Link className="font-semibold text-red-700" to='/register'>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;