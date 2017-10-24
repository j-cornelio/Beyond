import request          from 'superagent';
import * as actionTypes from './actionTypes';

const APIURL      = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';

export const fetchVideos = () => {
  return (dispatch) => {

    dispatch( isVideosLoading(true) ); // immediate dispatch, loader

    return request.get(APIURL) // asynch task returns promise obj
      .then( response => { //also returns promise 
        if(!response.ok){
          throw Error(response.statusText);
        }

        dispatch( isVideosLoading(false) );

        return response;

      })
      .then( response => { 
        dispatch( fetchVideosSuccess( response.body ) );
      })
      .catch( error => {
        throw Error(error);
      })
  }
};
export const fetchVideosSuccess = (videos) => {
  return {
    type: actionTypes.FETCH_VIDEO_SUCCESS,
    videos, // payload
  }
};
export const isVideosLoading = (bool) => {
  return {
    type             : actionTypes.VIDEOS_IS_LOADING,
    isVideosLoading  : bool
  }
};
 

 //BookDetailsPage 
export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return request.get(APIURL + '/' + bookId) 
      .then( response => {
        dispatch(fetchBookIdSuccess(response.body)) //once resolved dispatched
      })
      .catch(error => {
        throw(error);
      })
  }
};
//BookDetailsPage
export const fetchBookIdSuccess = (book) => { 
  return {
    //single book payload gets dispatched to bookReducers
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS, 
    book,
  }
};
