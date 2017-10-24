import { combineReducers } 					from 'redux';
import { videosReducer, isVideosLoading } 	from './videoReducers';

export default combineReducers({
	videos 			: videosReducer,
	isVideosLoading
})

//gets created as store, passed to Provider then connected - passed state as prop