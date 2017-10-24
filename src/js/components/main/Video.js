import React      from 'react';
import { Link }   from 'react-router';
import Shorten    from './Shorten';
import ShowMore   from 'react-show-more';

function lessMore(str, less){
  if(less){
    return str.slice(0, 200) + '...';
    } else {
    return str;
  }
}

const Video = ({snippet, id, show}) => {

  var thumbs = (snippet.thumbnails) ? snippet.thumbnails.medium.url : '../images/no-video.png';

	return (
    <div className="row video-row">
      <div className="col-sm-6 col-sm-push-6">
        <h3>{snippet.title}</h3>
        <h4>Published on {snippet.publishedAt.slice(0, 10)}</h4>
        <div className="hidden-xs">

          <ShowMore
            lines={6}
            more='Show more'
            less='Show less'
          >
            {snippet.description}
          </ShowMore>
        </div>
      </div>

      <div className="col-sm-6 col-sm-pull-6">
        <Link to={`/${id}`}><img src={thumbs} /></Link>
      </div>
    </div>
	)
}

export default Video;