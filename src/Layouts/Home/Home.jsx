import Header from "../../Components/Header/Header";
import Headline from "../../Components/Headline/Headline";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="my-5 flex justify-center">
                <Header></Header>
            </div>
            <div className="flex items-center bg-slate-400 rounded-sm"><button className="btn btn-info">Latest</button>
                <Headline></Headline>
            </div>
        </div>
    );
};

export default Home;