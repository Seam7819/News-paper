import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Headline from "../../Components/Headline/Headline";
import LeftAside from "../../Components/LeftAside/LeftAside";
import Navbar from "../../Components/Navbar/Navbar";
import RightAside from "../../Components/RightAside/RightAside";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="my-5 flex justify-center">
                <Header></Header>
            </div>
            <div className="flex items-center bg-slate-400 rounded-sm"><button className="btn btn-info">Latest</button>
                <Headline></Headline>
            </div>
            <div>
                <Navbar></Navbar>
            </div>
            <main className="max-w-7xl mx-auto grid md:grid-cols-12">
                <div className="col-span-3 ">
                    <aside > <LeftAside></LeftAside> </aside>
                </div>
                <div className="col-span-6 ">
                    <section> <Outlet></Outlet> </section>
                </div>
                <div className="col-span-3 ">
                    <aside ><RightAside></RightAside></aside>
                </div>
            </main>
        </div>
    );
};

export default Home;