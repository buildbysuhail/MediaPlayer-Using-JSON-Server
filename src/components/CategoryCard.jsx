import React from "react";
import { addHistory } from "../services/allAPIs";

function CategoryCard({ video, onDelete }) {

  const handleOpenModal = async () => {

    const dt = new Date().toLocaleString();

    document.getElementById(`category_modal_${video.id}`).showModal();

    const historyData = {
      videoId: video.id,
      caption: video.caption,
      videoUrl: video.videoUrl,
      dateAndTime: dt
    };

    try {
      await addHistory(historyData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseModal = () => {
    document.getElementById(`category_modal_${video.id}`).close();
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">

        <img
          src={video.videoImgUrl}
          alt={video.caption}
          className="w-full h-25 object-cover cursor-pointer"
          onClick={handleOpenModal}
        />

        <div className="p-2">
          <h3 className="font-semibold text-sm truncate">
            {video.caption}
          </h3>

          <div className="flex justify-end mt-1">
            <button
              onClick={onDelete}
              className="text-red-500 hover:text-red-700 cursor-pointer"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog
        id={`category_modal_${video.id}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box max-w-3xl">

          <iframe
            className="w-full h-72 rounded-lg"
            src={video.videoUrl}
            title={video.caption}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <div className="modal-action">
            <button
              onClick={handleCloseModal}
              className="btn btn-error"
            >
              Close
            </button>
          </div>

        </div>
      </dialog>
    </>
  );
}

export default CategoryCard;