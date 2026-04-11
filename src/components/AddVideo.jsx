import React from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { addVideo } from '../services/allAPIs';

function AddVideo({ onVideoUploaded }) {
// StateManagement For Storing Details Abt Video when uploading(User gives the Datas like video ID, Video Image URL,...)
const [video, setVideo] = useState({
  videoID : "", caption: "", videoImgUrl: "", videoUrl: ""
})
console.log(video);

// Function For Closing the Modal when Status is 200:
const handleClose=()=>{
  document.getElementById('my_modal_4').close();
}

// const {videoID, caption, videoImgUrl, videoUrl} = video // During Destructuring make sure to give the Same Variable names used in the Object that defined already 
const handleUpload=async()=>{
  const {videoID, caption, videoImgUrl, videoUrl} = video // During Destructuring make sure to give the Same Variable names used in the Object that defined already 
  if(!videoID || !caption || !videoImgUrl || !videoUrl){
    toast.error("Please Fill Completly")
  }
  else {
    const code = videoUrl.split("v=")[1]
    // Meca=hanism for converting Watch Url into Embeded Url.

    const embedUrl = `https://www.youtube.com/embed/${code}?tNR80d3VFHk&`
    video.videoUrl = embedUrl

    const result = await addVideo(video)
    if(result.status===201)
    {
      toast.success("Uploading Success")
      handleClose() 
      setVideo({videoID:"", caption: "", videoImgUrl: "", videoUrl: ""})
      onVideoUploaded() // Call the callback function to refresh the video list in Home component
    }
    else{
      console.log(result);
      toast.error("Something Went Wrong")
    }
    console.log(result, "POst..."); 
}

  }
    


  return (
    <div>
      <button className='btn bg-green-50 outline-green-50' title='Add new video' onClick={()=>document.getElementById('my_modal_4').showModal()}>
        <FaPlusCircle className='fa-2xl fill-amber-900' />
      </button>
      {/* <ToastContainer/> */}
  <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
      <ToastContainer/>
  <div className="modal-box bg-gradient-to-b from-slate-600 to-slate-400 sm:w-100">
    {/* <ToastContainer/> */}
    <h3 className="font-bold text-xl">Upload Video Details</h3>
    <div className='max-w-lg w-full flex flex-col justify-center items-center'>
      <label className="floating-label mt-2 ">
        <input type="text" onChange={(e)=>{setVideo({...video, videoID:e.target.value})}} placeholder="Video ID" className="input input-md bg-indigo-200" />
          <span>video id</span>
      </label>
      <label className="floating-label mt-2">
        <input type="text" onChange={(e)=>{setVideo({...video, caption:e.target.value})}} placeholder="Caption" className="input input-md bg-indigo-200" />
          <span>caption</span>
      </label>
      <label className="floating-label mt-2">
        <input type="text" onChange={(e)=>{setVideo({...video, videoImgUrl:e.target.value})}} placeholder="Video Image URL" className="input input-md bg-indigo-200" />
          <span>image url</span>
      </label>
      <label className="floating-label mt-2">
        <input type="text" onChange={(e)=>{setVideo({...video, videoUrl:e.target.value})}} placeholder="Youtube Video URL" className="input input-md bg-indigo-200" />
          <span>video url</span>
      </label>
    </div>
    
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-error rounded-lg shadow-2xl font-bold">Close</button>      
      </form>
        <button onClick={handleUpload} className="btn btn-success ml-4 rounded-lg shadow-2xl font-bold">Upload</button>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default AddVideo
