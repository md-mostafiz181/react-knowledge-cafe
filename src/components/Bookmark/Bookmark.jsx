

const Bookmark = ({bookmark}) => {
    const {title}= bookmark;
    return (
        <div className="p-3 border my-1 bg-gray-400 rounded-lg font-bold mx-3 my-3"> 
            <h3 >{title}</h3>
        </div>
    );
};

export default Bookmark;