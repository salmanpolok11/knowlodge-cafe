
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Booksmark from './Components/Bookmarks/Booksmark'
import Home from './Components/Home/Home'

function App() {


  return (
    <div className='lg:max-w-6xl lg:mx-auto p-5'>
         <Home></Home>
          <div className=' '>
          <Blogs></Blogs>
         {/* <Booksmark></Booksmark> */}
          </div>
    </div>
  )
}

export default App
