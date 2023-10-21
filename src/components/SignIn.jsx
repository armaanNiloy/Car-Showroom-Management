import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SignIn = () => {
    const { login, signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        login(email, password)
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login',
                    text: 'Successfully Login'
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Login',
                    text: 'Wrong password of email, try again...'
                })
                navigate('/signIn');
            })
    }
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Login',
                    text: 'Somethings went wrong.'
                })
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>New here?<Link className="label-text-alt link link-hover text-base text-blue-600" to='/signUp'>Please Sign Up</Link></p>
                            </label>
                        </div>
                        
                        <div className="form-control mt-6 gap-3">
                            <button className="btn btn-primary">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn btn-accent">Login with Google</button>
                        </div>
                        
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default SignIn;