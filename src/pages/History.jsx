import React from 'react'

function History() {
  return (
    <div className='p-3 bg-amber-50 flex flex-col items-center'>
      <h2 className='text-2xl text-red-900 self-start'>Watch History</h2>
      <div className="overflow-x-auto rounded-box border-neutral-500 lg:w-[800px] xl:w-[1000px] border-base-content/5 bg-neutral-800 text-white mt-2 md:mt-3 lg:mt-4">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className='text-white'>
        <th>Video ID</th>
        <th>Video URL</th>
        <th>Date and Time</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row */}
      <tr className='hover:bg-neutral-900 hover:text-neutral-300'>
        <th>1</th>
        <td>http:///www.youtube.com?watch=dasdde21342sd23l</td>
        <td>10/02/2025</td>
        <td>
          <button className='btn border-none outline-none shadow-none bg-transparent focus:ring-0'>
            <i className="fa-solid fa-trash" style={{color: "#e40707",}} />
          </button>
       </td>
      </tr>
      
    </tbody>
  </table>

  
</div>

<div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>


    </div>
  )
}

export default History
