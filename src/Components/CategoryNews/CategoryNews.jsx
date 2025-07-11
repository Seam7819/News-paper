import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const CategoryNews = () => {

    const {data} = useLoaderData()

    return (
        <div>
            <h1 className="font-semibold text-xl">Dragon News Home</h1>
             <h3 className="font-light my-3">{data.length} News Found in this Category</h3>
             <div>
                {
                    data.map(singleNews => <NewsCard key={singleNews._id}  singleNews={singleNews}></NewsCard>)
                }
                
             </div>
        </div>
    );
};

export default CategoryNews;