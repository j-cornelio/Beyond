import React      from 'react';
import { Link }   from 'react-router';
import PropTypes  from 'prop-types';
import LoaderHOC  from '../HOC/LoaderHOC';

//@LoaderHOC - decorates the class name.  needs class
const VideoDetails = ({video, videoId}) => {
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
          <a href={'https://www.youtube.com/watch?v=' + videoId} target="_blank">
            <img src={thumbnails.high.url} />
          </a>
        </div>
      </div>
    )
  }

//wrapped it into an HOC, making func call
export default LoaderHOC('video')(VideoDetails);

//decoractors lets you use HOC in a different way

VideoDetails.propTypes = {
  video: PropTypes.array,
};