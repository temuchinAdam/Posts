const moduleName = 'posts'

const GET_POSTS = `${moduleName}/GET_POSTS`
const DELETE_POSTS = `${moduleName}/DELETE_POSTS`


const defaultState = {
    posts: [],
}

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_POSTS:
            return { ...state, posts: payload }
        case DELETE_POSTS:
            return { ...state, posts: state.posts.filter(item => item.id !== payload.id) }
    default: 
        return state;
    }
}

export const getPosts = () =>  async (dispatch) => {
    try{
       await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((data) => dispatch({ type: GET_POSTS, payload: data}))
    } catch(error){
        console.log(error);
    }
}
export const deletePost = (id) =>  async (dispatch) => {
    try{
       await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
      dispatch( {type: DELETE_POSTS, payload: { id } })
    } catch(error){
        console.log(error);
    }
}
