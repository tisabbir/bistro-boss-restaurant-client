import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../Pages/Hooks/useAuth";

const SocialLogin = () => {
    const {googleLogin} = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => {
            console.log('from google login',res.user);
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="mb-6  w-full">
            <div className="divider px-2">OR</div>
            <button onClick={handleGoogleLogin} className="btn flex mx-auto"> <FaGoogle /> Google</button>
        </div>
    );
};

export default SocialLogin;
