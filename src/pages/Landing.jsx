// import Link from 'daisyui/components/link'
import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='p-5 bg-violet-50 min-h-screen'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            <div className="p-4 flex flex-col justify-center ms-17">
                <h3 className='text-2xl font-bold text-blue-500 mb-2'>About This App</h3>
                <p className='text-lg text-stone-700'><span className='hover:text-stone-500'>Media Player</span> is a modern desktop application that simplifies the way you organize and enjoy YouTube content. Manage your video library, create custom categories, track watch history, and experience seamless playback through an intuitive interface. With built-in OTA updates powered by GitHub Actions, the app stays current with the latest features and improvements—no manual downloads or app store visits required.</p>
                <Link to={'/home'}  className='btn btn-info rounded-xl font-bold text-white mt-1'>Let's Go... <i className="ms-3 fa-solid text-primary fa-rocket" /></Link>
            </div>
            <div className="p-4 flex justify-center items-center">
                <img className='sm:w-60 md:w-70 lg:w-80' src="https://i.ibb.co/vxz3JMRq/images-removebg-preview-1.png" alt="" />
            </div>
      </div>
      {/* Start */}
      <div className='mt-20 mb-5 mx-auto max-w-7xl'>
        <h1 className='text-center text-3xl lg:text-4xl font-bold text-primary hover:text-black' >Features</h1>

         {/* Grid Cards: */}
       <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 lg:mt-13 mt-8 justify-items-center'>
        {/* Card 1 */}
          <div className="card bg-violet-50  w-full sm:w-80 md:w-96 lg:w-96 mt-3">
    <figure className="px-10 pt-10">
      <img style={{width:'18rem',height:'16rem'}}
        src="https://cdn.dribbble.com/userupload/21531313/file/original-81232229e6beb181c4d13bae1ce0395f.gif"
        alt="Shoes"
        className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Mange Videos</h2>
      <p className='lg:text-lg'>Organize, edit, and delete videos for a seamless media experience.</p>
    </div>
  </div>
  {/* card 2 */}
  <div className="card bg-violet-50 w-full sm:w-80 md:w-96 lg:w-96 mt-3">
    <figure className="px-10 pt-10">
      <img style={{width:'18rem',height:'16rem'}}
        src="https://media.tenor.com/pOv7SnZx7xAAAAAM/upload-cat.gif"
        alt="Shoes"
        className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Upload Videos</h2>
      <p className='lg:text-lg'>Share content by transferring videos to a platform or cloud storage.</p>    
    </div>
  </div>
  {/* card 3 */}
  <div className="card bg-violet-50 w-full sm:w-80 md:w-96 lg:w-96 mt-3">
    <figure className="px-10 pt-10">
      <img style={{width:'18rem',height:'16rem'}}
        src="https://media3.giphy.com/media/lOgYYHn9gqSfzXEbRh/200w.webp?cid=790b7611q5nm5qduu3o97a3x7ymxjlxf2mf0stxlgci5sgfo&ep=v1_gifs_search&rid=200w.webp&ct=g"
        alt="Shoes"
        className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Watch History</h2>
      <p className='lg:text-lg'>View a list of previously watched videos for easy access and tracking.</p>
    </div>
  </div>
{/* card 4 */}
     <div className="card bg-violet-50 w-full sm:w-80 md:w-96 lg:w-96 mt-3">
    <figure className="px-10 pt-10">
      <img style={{width:'18rem',height:'16rem'}}
        src="https://png.pngtree.com/png-vector/20220707/ourmid/pngtree-set-of-long-shadow-glyph-icons-with-flat-design-for-online-shop-categories-vector-png-image_32546402.png"
        alt="Shoes"
        className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Categories</h2>
      <p className='lg:text-lg'>Browse videos by category for a more organized viewing experience.</p>
    </div>
  </div>
{/* card 5  */}
     <div className="card bg-violet-50 w-full sm:w-80 md:w-96 lg:w-96 mt-3">
    <figure className="px-10 pt-10">
      <img style={{width:'18rem',height:'16rem'}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGAWKENJfKnRW8OiWcnTu9vpSnzPFSMSzjmo54m55kw&s"
        alt="Shoes"
        className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Desktop Ready</h2>
      <p className='lg:text-lg'>Run the application as a native Windows desktop app using Electron.</p>
    </div>
  </div>

       </div>

      </div>

    {/* 3rd Div */}
    <div className="bg-violet-100 rounded-lg shadow-xl p-6 m-3 lg:m-9">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className='flex flex-col justify-center  p-4'>
            <h2 className='text-2xl font-bold text-stone-700'>Seamless OTA Updates</h2>
            <p className='hover:text-stone-600 lg:text-lg'>Built with GitHub Actions, the app supports Over-the-Air (OTA) updates, allowing users to receive the latest features, performance improvements, and bug fixes without manually downloading new installers or visiting an app store.</p>
        </div>
        <div className='flex items-center justify-center'>
        <iframe className='rounded-2xl sm:w-full md:w-103 '  height="310" src="https://www.youtube.com/embed/TsLFMxNNlBg" title="About the concept OTA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Landing
