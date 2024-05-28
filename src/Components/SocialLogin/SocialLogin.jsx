import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../Pages/Hooks/useAuth";
import useAxiosPublic from "../../Pages/Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => {
            const user = res.user;
            const userInfo = {
                name : user.displayName,
                email : user.email,
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
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
