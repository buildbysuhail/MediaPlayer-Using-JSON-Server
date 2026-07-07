import { useState } from 'react'
import AddVideo from '../components/AddVideo'
import VideoList from '../components/VideoList'
import Category from '../components/Category'
import { Link } from 'react-router-dom'
import { FaHistory } from "react-icons/fa";
import CategoryList from '../components/CategoryList'


function Home() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [categoryFlag, setCategoryFlag] = useState(false);
  return (
    <div className='bg-violet-50 h-screen flex flex-col overflow-hidden'>
      {/* Header */}
      <div className='flex md:text-3xl p-5 w-full sm:text-2xl shrink-0'>
        <h1 className='ms-5 sm:ms-39 text-violet-500 md:text-violet-800'>All Videos</h1>
        <Link to={'/his'} className='ml-auto underline font-light hidden md:block'>Watch History</Link>
        <Link to={'/his'} className='ml-auto block md:hidden'><FaHistory /></Link>
      </div>

      {/* Grid — fills remaining height, each column scrolls independently */}
      <div className="grid grid-cols-1 custom-scroll sm:grid-cols-1 md:grid-cols-7 lg:grid-cols-10 gap-0 p-2 max-w-8xl mx-auto w-full flex-1 min-h-0">

        <div className="flex justify-center md:justify-start p-4 md:w-22 shrink-0">
          <AddVideo onVideoUploaded={() => setRefreshKey(prev => prev + 1)} />
        </div>

        <div className="col-span-7 overflow-y-auto custom-scroll-1 px-2 py-2 rounded-lg w-full md:w-125 lg:w-full">
          <VideoList refreshTrigger={refreshKey} />
        </div>

        <div className="col-span-2 flex flex-col overflow-y-auto custom-scroll p-4">
          <div className="shrink-0">
            <Category setCategoryFlag={setCategoryFlag} />
          </div>
           <div className="flex-1 min-h-0 flex flex-col">
            <CategoryList categoryFlag={categoryFlag} />
          </div>
         
        </div>

      </div>
    </div>
  );
}

export default Home;
