import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { getVideo } from "../services/allAPIs";

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
    } catch (err) {
      console.error("Failed to fetch videos", err);
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
            <div className="bg-green-100"><VideoCard video={item} /></div>
          ))}
        </div>
      ) : (
        <p className="text-red-500 text-center">No Videos Found</p>
      )}
    </>
  );
}

export default VideoList;
