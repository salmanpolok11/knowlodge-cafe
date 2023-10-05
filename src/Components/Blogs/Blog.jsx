import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog}) => {

  console.log(Blog);

  const {cover,  title, author_img,author, posted_date, reading_time, hashtags} = blog;

  return (
    <div className="mb-20">

     <img className=" w-full mb-4 rounded-2xl" src={cover} alt="" />

     <div className="flex justify-between items-center mb-5">
            <div className="flex items-center">
                <img className="w-16"  src={author_img} alt="" />
                <div className="mx-4">
                       <h1 className=" text-2xl font-bold">{author}</h1>
                       <span>{posted_date}</span>
                </div>
            </div>
            <div>
                  <span className=' lg:text-2xl'>{reading_time} min red</span>
                   <button> <FaBookmark className=' text-orange-600 lg:text-2xl lg:mx-4 mx-2 '></FaBookmark> </button>
            </div>
     </div>

    <h1 className=" text-3xl font-bold">{title}</h1>

     <div className="mt-5">
         {hashtags.map(hash => <sapan > #{hash}</sapan>)}
     </div>

    </div>

  
 


  );
};

export default Blog;