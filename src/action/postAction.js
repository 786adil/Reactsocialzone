import store from '../store/store'

export function setPost(data) {
    store.dispatch({
        type: "SET_POST",
        payload: data
    })
}


export function addPost(data) {
    store.dispatch({
        type: "ADD_POST",
        payload: data
    })
}