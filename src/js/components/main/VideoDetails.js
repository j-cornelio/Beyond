import React      from 'react';
import { Link }   from 'react-router';
import PropTypes      from 'prop-types';

const VideoDetails = ({video}) => {
  if(!!video){
    var { description, thumbnails, title, publishedAt } =  video[0].snippet;
    return (
      <div className="row video-row" id="VideoDetails">
        <div className="col-sm-6 col-sm-push-6">
          <h3>{title}</h3>
          <h4>Published on {publishedAt.slice(0, 10)}</h4>
          <div className="hidden-xs">
            <p>{description}</p>
          </div>
        </div>

        <div className="col-sm-6 col-sm-pull-6">
          <img src={thumbnails.high.url} />
        </div>
      </div>
    )
  }else{
    return <h1>loading</h1>
  }
}

export default VideoDetails;

VideoDetails.propTypes = {
  video: PropTypes.array,
};