import React, { useState } from "react";
import { addHistory } from "../services/allAPIs";


function VideoCard({ video, onDelete, id }) {
console.log(video, "video in card");
  const [history, setHistory] = useState({videoId: "", videoUrl: "", dateAndTime: ""});

//   const handleOpenModal = async (id) => {
//     const dt = new Date().toLocaleString()
//   document.getElementById(`my_modal_5-${id}`).showModal()
//     setHistory({
//       videoId: video.id,
//       videoUrl: video.videoUrl,
//       dateAndTime: dt
//     });
// console.log(history, "history before adding");
//     const result = await addHistory(history)
//   // Additional functionality here
//   console.log(result, "history added");
// }

const handleOpenModal = async (id) => {

  const dt = new Date().toLocaleString();

  document.getElementById(`my_modal_5-${id}`).showModal();

  const historyData = {
    videoId: video.id,
    caption: video.caption,
    videoUrl: video.videoUrl,
    dateAndTime: dt
  };

  console.log(historyData, "history before adding");

  const result = await addHistory(historyData);

  console.log(result, "history added");
};

const handleCloseModal = (id) => {
  document.getElementById(`my_modal_5-${id}`).close()
  setHistory({videoId: "", videoUrl: "", dateAndTime: ""})
  console.log("Closed")
}

const handleDrag = (ev, val) => {
  console.log("Dargging")
  console.log(val, "valllll")
  ev.dataTransfer.setData("video", JSON.stringify(val));
}

  return (
    <div className="flex justify-center items-center p-4">
      <div className="card bg-base-100 w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300" draggable="true" onDragStart={(ev) => handleDrag(ev, video)}>

        <figure className="overflow-hidden">
          <img
            style={{ cursor: "pointer", height: "150px" }}
            onClick={() => handleOpenModal(id)}
            src={video.videoImgUrl}
            alt="Shoes"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </figure>
        <div className="card-body h-20 p-2">
          <h2 className="card-title text-sm lg:text-md font-bold text-gray-800">
            {video.caption}
          </h2>
          <p className="text-[11px] text-gray-600 truncate ">{video.caption}</p>
          <button className="" onClick={() => onDelete(video.id)}>
            <i className="fa-solid w-full text-right fa-trash fa-sm mt-1 text-red-600 hover:text-red-800 cursor-pointer transition-colors duration-200" />
          </button>
        </div>
      </div>

      {/* Modal */}
      <dialog id={`my_modal_5-${id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  p-6 rounded-md max-w-lg w-full">
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
            {/* <form method="dialog">
              <button className="btn btn-error btn-sm px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                Close
              </button>
            </form> */}
            <button
              onClick={() => handleCloseModal(id)}
              className="btn btn-error btn-sm px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default VideoCard;
