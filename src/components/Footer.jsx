import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className="footer static bottom-0 w-full footer-horizontal font-bold footer-center bg-base-200 text-base-content md:text-lg lg:text-xl rounded p-10 md:p-7 lg:p-5">
  <nav className="grid grid-flow-col gap-4 md:gap-11 lg:gap-25">
    <Link to={'/'} className="link link-hover hover:text-violet-800">Landing</Link>
    <Link to={'/home'} className="link link-hover hover:text-emerald-700">Home</Link>
    <Link to={'/his'} className="link link-hover hover:text-red-800">Watch History</Link>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4 md:gap-15 lg:gap-33">
      <a>
      <i className="fa-brands fa-twitter fa-2xl text-blue-700" />
      </a>
      <a>
      <i className="fa-brands fa-youtube fa-2xl text-red-600" />
      </a>
      <a>
      <i className="fa-brands fa-facebook-f fa-2xl text-indigo-800" />
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-lime-700 font-extrabold'>Polosys</span> Ltd</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
