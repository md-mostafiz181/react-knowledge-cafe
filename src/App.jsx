
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks]= useState([]);
  const [marks, setMarks] = useState(0);

  const handleAddToBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleAddToMarkRead = time =>{
    const newTime = marks + time;
    setMarks(newTime)
  }


  return ( 
    <>

      <div className='max-w-7xl mx-auto'>
         <Header></Header>
         <div className='md:flex justify-between'>
            <Blogs handleAddToBookmarks={handleAddToBookmarks} handleAddToMarkRead={handleAddToMarkRead} ></Blogs>
          <Bookmarks  marks={marks} bookmarks={bookmarks} ></Bookmarks>
         </div>
      </div>

    </>
  )
}

export default App
