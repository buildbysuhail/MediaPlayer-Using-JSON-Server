import { useState } from 'react'
import AddVideo from '../components/AddVideo'
import VideoList from '../components/VideoList'
import Category from '../components/Category'
import { Link } from 'react-router-dom'
import { FaHistory } from "react-icons/fa";
import CategoryList from '../components/CategoryList'


function Home() {
  const [refreshKey, setRefreshKey] = useState(0);
  return (
    // start
    <div className='bg-green-50  flex flex-col  sm:items-center sm:justify-center'>     
      <div className='flex md:text-3xl p-5 w-full sm:text-2xl  max-auto'>
        <h1 className='ms-5 sm:ms-39 text-violet-500 md:text-violet-800'>All Videos</h1>
        <Link to={'/his'} className='ml-auto justify-end underline font-light hidden sm:hidden md:block'>Watch History</Link>
        <Link to={'/his'} className='ml-auto justify-end block sm:block md:hidden'><FaHistory /></Link>

      </div>  
      
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-7 lg:grid-cols-7 p-2 max-w-8xl mx-auto w-full">
      
      <div className="flex justify-center  sm:justify-center md:justify-start lg:justify-start p-4 md:w-22"><AddVideo onVideoUploaded={()=>setRefreshKey(prev => prev + 1)} /></div>
      <div className="col-span-4 flex sm:justify-center md:justify-start px-9 py-4 rounded-lg w-full md:w-[500px] lg:w-[600px]"><VideoList refreshTrigger={refreshKey}/></div>
      <div className="col-span-2  justify-center sm:justify-center md:justify-end lg:justify-end p-4">
        <div className="flex flex-col">
        <Category/>
        <CategoryList/>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Home;
