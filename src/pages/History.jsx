import React, { useEffect, useState } from 'react'
import { getHistory, deleteHistory, clearHistory } from '../services/allAPIs'
import { toast } from 'react-toastify';


function History() {
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const historyData = await getHistory();
      // console.log(historyData, "history data");
      setHistory(historyData?.data || []);
    } catch (error) {
      console.error("Error fetching history:", error);
      toast.error("Failed to fetch watch history");
    }
  };

  const handleDeleteHistory = async (videoId) => {
    try {
      const res = await deleteHistory(videoId);
      console.log(res, "deleted historyyyyy");
      
      toast.success("History item deleted successfully");
      fetchHistory(); // Refresh the history list
    } catch (error) {
      console.error("Error deleting history:", error);
      toast.error("Failed to delete history item");
    }
  };

  const handleclearHistory = async () => {
    try {
      const res = await clearHistory()

      toast.success("History cleared successfully");
      fetchHistory();
    } catch (error) {
      console.error("Error clearing history:", error);
      toast.error("Failed to clear history");
    }
  }

  useEffect(() => {
    fetchHistory();
  }, []);
// console.log(history, "current history state");

  if (history.length === 0) {
    return (
      <div className='p-3 bg-amber-50 flex flex-col items-center'> 
        <h2 className='text-2xl text-red-900 self-start'>Watch History</h2>
        <p className='text-lg text-gray-600 mt-4'>No watch history available.</p>
      </div>
    );
  }

  return (
    <div className='p-3 bg-amber-50 flex flex-col items-center'>
      <h2 className='text-2xl text-red-900 self-start'>Watch History</h2>
      <div className="overflow-x-auto rounded-md border-neutral-500 lg:w-[800px] xl:w-[1000px] border-base-content/5 bg-neutral-800 text-white mt-2 md:mt-3 lg:mt-4">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className='text-white'>
        <th>Video ID</th>
        <th>Caption</th>
        <th>Video URL</th>
        <th>Date and Time</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row */}
      {history?.map((item) => (
        <tr className='hover:bg-neutral-900 hover:text-neutral-300' key={item.videoId}>
          <th>{item.videoId}</th>
          <td>{item.caption}</td>
          <td>{item.videoUrl}</td>
          <td>{item.dateAndTime}</td>
          <td>
            <button onClick={()=> handleDeleteHistory(item.id)} className='btn border-none outline-none shadow-none bg-transparent focus:ring-0'>
              <i className="fa-solid fa-trash" style={{color: "#e40707",}} />
            </button>
          </td>
        </tr>
      ))}

    </tbody>
  </table>

  
</div>

{/* <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div> */}
<div className="button btn btn-xs mt-1" onClick={handleclearHistory}>
  Clear History
</div>


    </div>
  )
}

export default History
