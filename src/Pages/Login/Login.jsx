import { useEffect, useRef, useState } from 'react';
import img from '../../../public/assets/others/Illustration.svg'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
const Login = () => {

  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const {login} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

    useEffect(()=>{
      loadCaptchaEnginge(6)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(() => {
          //success codes
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You have successfully logged in",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from)
        })
        .catch(err => {
          console.log(err);
        })
    }
    const handleValidateCaptcha = () =>{
     const userCaptchaValue = captchaRef.current.value;
     if (validateCaptcha(userCaptchaValue)){
      //if right
        setDisabled(false)
     } else{
      //if wrong
      setDisabled(true)
     }

    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <img src={img} />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name='email'
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name='password'
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                placeholder="Type the Above Text"
                name='captcha'
                className="input input-bordered"
                ref={captchaRef}
                required
              />
              <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs'>Validate Captcha</button>
            </div>

            <div className="form-control mt-6">
              <button disabled={disabled} className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='text-center'>Do not have an account? <Link to={'/register'} className='underline'>Register</Link> Now. </p>
          <Link to={'/'} className="btn btn-outline btn-xs w-1/3 mx-auto my-6">Go To Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
