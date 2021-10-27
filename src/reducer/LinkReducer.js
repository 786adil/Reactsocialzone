
    import Post from '../Jsondata/Link.json';
    const initialState = {
      link: []
    };
    function  LinkReducer(state = initialState, action) {
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
    export default LinkReducer;