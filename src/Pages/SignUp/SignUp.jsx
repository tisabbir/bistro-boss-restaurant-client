import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {updateUserProfile} = useAuth();
  const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const {createUser} = useAuth();

      const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(() => {
            
            const userInfo = {
              name : data.name,
              email : data.email
            }
            
            updateUserProfile(data.name, data.photo)
            .then(()=>{
              axiosPublic.post('/users', userInfo )
            .then( res => {
              if(res.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your account have been successfully created",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/')
              }
            })
              
            })
            
        })
        .then(err => {
            console.log(err);
        })
      }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photo", { required: true })}
                />
                {errors.photo && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register('email', {required:true})}
                />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register('password', { required : true, minLength:6, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/})}
                />
                {errors.password?.type === 'required' && <span className="text-red-600">Password is Required</span>}
                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be at least 6 characters</span>}
                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have at least one uppercase, one lower case and one number.</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="text-center mb-6">Already have an account? <Link to={'/login'} className="underline">Login</Link> Now! </p>
            <SocialLogin />

          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
