
    import Post from '../Jsondata/Post.json';
  const initialState = {
    post: []
  };
  function  PostReducer(state = initialState, action) {
  switch(action.type) {
    case "SET_POST":
      return {
        post: action.payload
      };    
    case "ADD_POST":
        console.log(action.payload,"action.payload")
      return {
        post: [...state.post,action.payload]
      };    
    default:
      return state;
    }
  }
  export default PostReducer;