import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div >
      <div className="navbar bg-base-100 shadow-sm px-4 py-5  ">
  <div className="flex-1">
  <i className="fa-solid fa-cloud-arrow-up fa-2xl fa-bounce text-sky-700 ms-7" />
    <Link to={'/'}><a className="btn btn-ghost hover:outline-none outline-white rounded-xl text-2xl lg:text-3xl ms-5 font-extrabold text-purple-800 hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-600 hover:text-transparent hover:bg-clip-text">Media Player</a></Link>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
    </button>
  </div>
</div>
    </div>
  )
}

export default Header
