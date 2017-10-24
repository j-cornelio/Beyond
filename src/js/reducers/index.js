import { combineReducers } 					from 'redux';
import { videosReducer, singleVideoReducer, isVideosLoading } 	from './videoReducers';

export default combineReducers({
	videos 				: videosReducer,
	singleVideo 		: singleVideoReducer,
	isVideosLoading
})

//gets created as store, passed to Provider then connected - passed state as prop