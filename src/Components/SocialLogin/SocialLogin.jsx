import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="flex flex-col my-2 gap-2">
             <button className="btn btn-outline"><FaGoogle />
                    Login With Google</button>
                <button className="btn btn-outline"><FaGithub></FaGithub> Login With Github</button>
        </div>
    );
};

export default SocialLogin;