import React from 'react';

const VideoItem = ({ video: { snippet } }) => (
  <h1>{snippet.title}</h1>
);

export default VideoItem;