

const Blog = ({blog}) => {
    console.log(blog)

    const {cover,title, author_img,author,posted_date,reading_time,hashtags }= blog;
    return (
        <div>
            <img className="w-full" src={cover} alt={`cover picture will be shown by ${title}`}/>
            <h1 className="text-3xl font-bold">{title}</h1>

            <div className="flex justify-between">
                <div className="flex">
                        <div>
                        <img className="w-[50px]" src={author_img} alt="" />
                        </div>
                        <div className="ml-3">
                                <h3>{author}</h3> 
                                <h4>{posted_date}</h4>
                        </div>

                </div>
                <h2>{reading_time} min read </h2>
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