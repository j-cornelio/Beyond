import React      from 'react';
import { Link }   from 'react-router';
import ShowMore   from 'react-show-more';

const Video = ({snippet, id}) => {

  var thumbs = (snippet.thumbnails) ? snippet.thumbnails.medium.url : '../images/no-video.png';

	return (
    <div className="row video-row">
      <div className="col-sm-8 col-sm-push-4">
        <h3><Link to={`/${id}`}>{snippet.title}</Link></h3>
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

      <div className="col-sm-4 col-sm-pull-8">
        <Link to={`/${id}`}><img src={thumbs} /></Link>
      </div>
    </div>
	)
}

export default Video;