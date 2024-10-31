import Bookmark from "../Bookmark/Bookmark";



const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 rounded ms-1 mt-2">
            <h1 className="text-3xl font-bold ps-3">Bookmarks : {bookmarks.length}</h1>

            <div className="">
               {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark= {bookmark}></Bookmark>  )
               }
            </div>
        </div>
    );
};

export default Bookmarks;