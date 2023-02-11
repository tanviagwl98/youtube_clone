import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {YOUTUBE_VIDEOS_API} from "../utils/config";
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        getVideos();
    },[])

    const getVideos = async() => {
        const data= await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json);
        setVideos(json.items);
    }
  return (
    <div className="flex flex-wrap">
    {videos.map((video) => {
        return(
            <Link to={"/watch?v=" + video.id} key={video.id}><VideoCard info={video} key={video.id}/></Link>
        )
    })}
    </div>
  )
}

export default VideoContainer