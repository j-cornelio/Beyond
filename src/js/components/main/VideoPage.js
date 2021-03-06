import React, { Component } from 'react';
import { connect } 			from 'react-redux';
import PropTypes 			from 'prop-types';
import Video 				from './Video';

class VideoPage extends Component{
	constructor(props){
		super(props);
	}

	_renderVideos(){
		return this.props.videos.map( video => {
			var imgId = video.snippet.thumbnails ? video.snippet.thumbnails.default.url.slice(23, 34) : '';
			return <Video key={video.id} {...video} imgId={imgId} />
		})
	}

	render(){
		return (
			<div>
				{this._renderVideos()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		videos 		: state.videos,
		loading 	: state.isVideosLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createBook: (book) => dispatch( bookActions.createBook(book) )
	}
}

////presentational Component passing props to
export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);

Video.propTypes = {
  videos: PropTypes.array,
};