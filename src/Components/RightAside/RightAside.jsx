import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import img1 from "../../../public/playground.png"
import img2 from "../../../public/class.png"
import img3 from "../../../public/swimming.png"
import img4 from "../../../public/bg.png"

const RightAside = () => {
    return (
        <div>
            <h2 className="font-semibold text-lg rounded-sm">Log In With</h2>
            <div >
                <SocialLogin></SocialLogin>
            </div>
            <h2 className="font-semibold my-5 text-lg">Find Us On</h2>
            <div>
                <div className=" flex gap-2 join-vertical">
                    <button className="btn justify-start join-item"><FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn justify-start join-item"><FaTwitter></FaTwitter> Twitter</button>
                    <button className="btn justify-start join-item"><FaInstagram></FaInstagram> Instagram</button>
                </div>
            </div>
            <div className="bg-slate-500 mt-4">
                <h1 className="p-4 font-semibold">Q Zone</h1>
                <div className="p-5">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img className="mt-5" src={img4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightAside;