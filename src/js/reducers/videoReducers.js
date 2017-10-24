import * as actionTypes from '../actions/actionTypes';

export const videosReducer = (state=[], action) => {
	switch(action.type){
		case actionTypes.FETCH_VIDEO_SUCCESS:
			return action.videos.items;

		default: 
			return state;
	}
}
export const isVideosLoading = (state=[], action) => {
	switch(action.type){
		case actionTypes.VIDEOS_IS_LOADING:
			return action.isVideosLoading;
			
		default:
			return state;
	}
}
export const singleVideoReducer = (state=[], action) => {
	switch(action.type){
		case actionTypes.FETCH_SINGLE_VIDEO:
			return action.video;
			
		default:
			return state;
	}
}