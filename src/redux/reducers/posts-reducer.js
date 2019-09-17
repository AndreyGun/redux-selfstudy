import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from '../actions'


const initialState = {
    posts: [],
    loading: true,
    error: null
};

const postsReducer = (state = initialState, { type, payload }) => {
    console.log(type);
    switch (type) {
        case FETCH_POSTS_REQUEST:
            return state;
        case FETCH_POSTS_SUCCESS:
            return {
                posts: payload,
                loading: false,
                error: null
            };
        case FETCH_POSTS_FAILURE:
            return {
                posts: [],
                loading: false,
                error: payload
            };
        default:
            return state;
    }
}

export default postsReducer;