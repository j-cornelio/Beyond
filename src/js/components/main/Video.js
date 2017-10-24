import React      from 'react';
import { Link }   from 'react-router';

const Video = ({snippet, id}) => {

  var thumbs = snippet.thumbnails ? snippet.thumbnails.medium.url : 'none'
  console.log('%c id: ', 'background:beige', id);

	return (
    <div className="row">
      <div className="col-sm-6 col-sm-push-6">
        <h3>{snippet.title}</h3>
        <h4>Published on {snippet.publishedAt.slice(0, 10)}</h4>
        <p className="hidden-xs">{snippet.description.slice(0, 200) + "..."}</p>
      </div>

      <div className="col-sm-6 col-sm-pull-6">
        <Link to={`/${id}`}><img src={thumbs} /></Link>
      </div>
    </div>
	)
}

export default Video;