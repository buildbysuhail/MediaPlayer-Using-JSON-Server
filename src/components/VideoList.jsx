import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { getVideo, deleteVideo } from "../services/allAPIs";
import { toast } from "react-toastify";

function VideoList() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideoData();
  }, []);


  const getVideoData = async () => {
    try {
      const videos = await getVideo();
      setVideoData(videos?.data);
      console.log(videos);
      toast.success("Videos fetched successfully!");
    } catch (err) {
      console.error("Failed to fetch videos", err);
      toast.error("Failed to fetch videos. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteVideo(id);
      setVideoData(videoData.filter((video) => video.id !== id));
      toast.success("Video deleted successfully!");
    } catch (err) {
      console.error("Failed to delete video", err);
      toast.error("Failed to delete video. Please try again.");
    }
  };
  // useEffect(() => {
  //   console.log("Updated videoData :", videoData);
  // }, [videoData]);

  return (
    <>
      {videoData?.length > 0 ? (
        <div className="grid grid-cols-3">
          {videoData.map((item) => (
            <div className="bg-green-100">
              <VideoCard video={item} onDelete={handleDelete} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-500 text-center">No Videos Found</p>
      )}
    </>
  );
}

export default VideoList;
