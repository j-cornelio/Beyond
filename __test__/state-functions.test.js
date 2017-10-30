import { videosReducer,
		singleVideoReducer  } 		from '../src/js/reducers/videoReducers';
import { fetchVideosSuccess,
		fetchSingleVideoSuccess } 	from '../src/js/actions/videoActions';

const video = {item: 'aaa', id: 1};


test('FETCH VIDEOS', () => {
 	const finState = videosReducer([], fetchVideosSuccess( {items: [video]} ));

	expect(finState).toEqual(
		[ {item: 'aaa', id: 1} ]
	);
});

test('FETCH SINGLE VIDEO', () => {
 	const finState = singleVideoReducer([], fetchSingleVideoSuccess( video ));

	expect(finState).toEqual(
		{item: 'aaa', id: 1}
	);
});



