import {GET_INFO, POST_INFO} from './actions'
const initialState = {
    data: []
}

export default function rootReducers(state = initialState, action) {
    switch(action.type) {
        case GET_INFO:
        return {
            ...state,
            data: action.payload
        }
        case POST_INFO:
            return {
                ...state
            }
       default:
            return state;
    }

};