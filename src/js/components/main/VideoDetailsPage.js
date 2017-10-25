import React, { Component }   from 'react';
import {connect}              from 'react-redux';
import * as videoActions      from '../../actions/videoActions';
import VideoDetails           from './VideoDetails';

class VideoDetailsPage extends Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){ 
    this.props.fetchSingleVideo(this.props.params.id);
  }
  render(){
    return (
      <div>
        <VideoDetails video={this.props.singleVideo.items} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    singleVideo: state.singleVideo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleVideo   : (id) => dispatch( videoActions.fetchSingleVideo(id) ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( VideoDetailsPage )