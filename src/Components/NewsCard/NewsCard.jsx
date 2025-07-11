   import { FaStar } from 'react-icons/fa';

   const NewsCard = ({ singleNews }) => {
     const formatDate = (dateString) => {
       return new Date(dateString).toLocaleDateString('en-US', {
         year: 'numeric',
         month: 'long',
         day: 'numeric',
       });
     };

     return (
       <div className="card bg-base-100 shadow-xl">
         <div className="card-body">
           <div className="flex items-center mb-4">
             <div className="avatar">
               <div className="w-12 rounded-full">
                 <img src={singleNews.author.img} alt={singleNews.author.name} />
               </div>
             </div>
             <div className="ml-4">
               <h3 className="font-bold">{singleNews.author.name}</h3>
               <p className="text-sm text-gray-500">{formatDate(singleNews.author.published_date)}</p>
             </div>
           </div>
           <h2 className="card-title text-2xl mb-2">{singleNews.title}</h2>
           <figure className="mb-4">
             <img src={singleNews.image_url} alt={singleNews.title} className="rounded-lg w-full h-48 object-cover" />
           </figure>
           <p className="text-gray-700 mb-2">{singleNews.details.substring(0, 100)}...</p>
           <div className="flex flex-wrap gap-2 mb-4">
             {['Biden', 'EU', 'Euro', 'Europe', 'Joe Biden', 'Military', 'News', 'Russia', 'Security', 'UK', 'Ukraine', 'United States', 'Worthy News'].map((tag) => (
               <span key={tag} className="badge badge-primary text-xs">{tag}</span>
             ))}
           </div>
           <div className="flex justify-between items-center">
             <div className="flex items-center">
               <FaStar className="text-yellow-400 mr-1" />
               <span className="text-gray-600">{singleNews.rating.number}</span>
               <span className="text-gray-500 ml-1">({singleNews.rating.badge})</span>
             </div>
             <div className="flex items-center">
               <span className="text-gray-600 mr-2">{singleNews.total_view} views</span>
               <button className="btn btn-sm btn-outline">Read More</button>
             </div>
           </div>
         </div>
       </div>
     );
   };

   export default NewsCard;