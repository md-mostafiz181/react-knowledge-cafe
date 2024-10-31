import Bookmark from "../Bookmark/Bookmark";



const Bookmarks = ({bookmarks, marks}) => {
    return (
        <div className="md:w-1/3" >

           <div className="bg-purple-400 rounded ms-1 mt-2">
              <h1 className="text-3xl font-bold p-3">Spent time on board : {marks}  </h1>
           </div>
                <div className=" bg-gray-200 rounded ms-1 mt-2 py-2">
                        <h1 className="text-3xl font-bold ps-3">Bookmarks : {bookmarks.length}</h1>

                        <div className="">
                        {
                            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark= {bookmark}></Bookmark>  )
                        }
                        </div>
                </div>
        </div>
    );
};

export default Bookmarks;