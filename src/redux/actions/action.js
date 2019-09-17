import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from '../action-types/'

const postsRequest = () => ({type: FETCH_POSTS_REQUEST});
const postsLoaded = (posts) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts
});
const postsError = (error) => ({
    type: FETCH_POSTS_FAILURE,
    payload: error
});

export const fetchPosts = () => dispatch => {
    dispatch(postsRequest());
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(posts => dispatch(postsLoaded(posts)))
        .catch(error => dispatch(postsError(error)))
}