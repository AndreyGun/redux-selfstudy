
const initialState = {
    posts: [],
    loading: false,
    error: null
};

const updatePosts = (state = initialState, { type, payload }) => {
    console.log(type);
    switch (type) {
        case 'FETCH_POSTS_REQUEST':
            return state;
        case 'FETCH_POSTS_SUCCESS':
            return {
                posts: payload,
                loading: false,
                error: null
            };
        case 'FETCH_POSTS_FAILURE':
            return {
                posts: [],
                loading: false,
                error: payload
            };
        default:
            return state;
    }
}

export default updatePosts;