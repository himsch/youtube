import './app.css';
import {useEffect, useState} from 'react';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET'
    };
    fetch('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAj2MmA38aVuvBQJQLuRav1dGBmR0hN5X0&part=snippet&chart=mostPopular&maxResults=25', options)
      .then(response => response.json())
      .then(response => setVideos(response.items))
      .catch(err => console.error(err));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
