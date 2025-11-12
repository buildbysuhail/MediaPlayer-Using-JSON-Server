import React from "react";


function VideoCard({video}) {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="card bg-base-100 w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <figure className="overflow-hidden">
          <img 
            style={{ cursor: "pointer", height:"150px" }}
            onClick={() => document.getElementById("my_modal_5").showModal()}
            src={video.videoImgUrl}
            alt="Shoes"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </figure>
        <div className="card-body h-20 p-2">
          <h2 className="card-title text-sm lg:text-md font-bold text-gray-800">
            {video.caption}
          </h2>
          <p className="text-[11px] text-gray-600 truncate ">
            {video.caption}
          </p>
          <i className="fa-solid w-full text-right fa-trash fa-sm mt-1 text-red-600 hover:text-red-800 cursor-pointer transition-colors duration-200" />
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  p-6 rounded-xl max-w-lg w-full">
          <iframe
            className="rounded-lg shadow-2xl w-full h-64 sm:h-80"
            src={video.videoUrl}
            title="Secrets Behind How These 3 Young Developers Earn Lakhs in Tech!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="modal-action mt-4">
            <form method="dialog">
              <button className="btn btn-error btn-sm px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default VideoCard;
