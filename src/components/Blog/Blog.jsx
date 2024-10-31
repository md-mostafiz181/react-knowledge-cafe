import { FaBookmark } from "react-icons/fa";


const Blog = ({blog, handleAddToBookmarks}) => {
    console.log(blog)

    const {cover,title, author_img,author,posted_date,reading_time,hashtags }= blog;
    return (
        <div className="my-2">
            <img className="w-full" src={cover} alt={`cover picture will be shown by ${title}`}/>
            <h1 className="text-3xl font-bold">{title}</h1>

            <div className="flex justify-between">
                <div className="flex">
                        <div>
                        <img className="w-[50px]" src={author_img} alt="" />
                        </div>
                        <div className="ml-3">
                                <h3>{author}</h3> 
                                <h4 className="text-gray-500">{posted_date}</h4>
                        </div>

                </div>
                <button onClick={()=>handleAddToBookmarks(blog)} className="flex text-gray-500 font-bold ">0{reading_time} min read <FaBookmark  className=" mt-1 text-green-700"></FaBookmark> </button>
            </div>

            <p>
                {
                    hashtags.map((hash,idx) => <span className="ms-1" key={idx}> <a href="">#{hash}</a> </span> )
                }
            </p>

            <button className="underline text-blue-700 font-bold">Mark as Read</button>
            
        </div>
    );
};

export default Blog;