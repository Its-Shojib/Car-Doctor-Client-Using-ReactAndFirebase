import { updateProfile } from 'firebase/auth'
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvier';
import auth from '../../Firebase/Firebase.config';

import img from '../../../public/assets/images/login/login.svg'

const Register = () => {

    let [showPassword, setShowPassword] = useState(false);
    let { createUser, googleSignIn, githubSignIn } = useContext(AuthContext)

    let navigate = useNavigate()
    let handleCreateUser = (e) => {
        e.preventDefault();
        let myname = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;

        if (password.length < 6) {
            swal("Error!", 'Password should be 6 character long and more', "error");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            swal("Error!", 'Password should have at-least one uppercase letter', "error");
            return;
        }
        // eslint-disable-next-line no-useless-escape
        else if (!/.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-].*/.test(password)) {
            swal("Error!", 'Password should have at-least one Special characters', "error");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(auth.currentUser, {
                    displayName: myname
                })
                .then(()=>{
                })
                .catch()
                swal("Good job!", "Register Success!", "success");
                navigate('/')
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
                navigate('/')
            })
            .catch(error => {
                swal("Error!", error.message, "error");
            })

    }
    let handleGithubLogin = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user);
                swal("Good job!", "Sign-in Successfuly!", "success");
                navigate('/')
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
            <div className="border border-black w-full md:w-4/12 text-center px-10 py-5 rounded-lg">
                <h2 className="text-3xl font-bold mb-2">Sign Up!</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">User Name</p>
                        <BsFillPersonFill className="absolute bottom-4 left-2"></BsFillPersonFill>
                        <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                            type="text"
                            name="name"
                            placeholder="Type your name"
                        />
                    </div>
                    <hr className="my-3" />
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
                    <button
                        className="bg-[#FF3811] w-full py-2 text-white font-semibold text-lg rounded-xl" type="submit">
                        Register</button>

                </form>

                <p className="mt-2">Or Sign up using</p>
                <div className="flex gap-3 justify-center my-3">
                    <img onClick={handleGoogleLogin} className="w-8 cursor-pointer" src="/google.jpg" alt="" />
                    <img onClick={handleGithubLogin} className="w-8 cursor-pointer" src="/GitHub-Mark.png" alt="" />
                </div>
                <div className="flex gap-3 justify-center mt-5">
                    <p>Already have an account?</p>
                    <Link className="font-semibold text-red-700" to='/login'>Login now</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;