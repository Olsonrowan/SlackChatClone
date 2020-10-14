import TYPES from "./type";
import { combineReducers } from 'redux'

export function userReducer(state = {authState: false}, action){
    if(action.type === TYPES.USER_DATA){
        return {
            ...state,
            ...action.payload
        }
    }else{
        return state
    } 

}

export default combineReducers({
    user: userReducer,
    channels: channelReducer,
    messages: MessageReducer

})


export function channelReducer(state = {channelslist:[{name: 'default Channel'}], selectedChannel: 'rocQy5B8Fes59y7CzgB3'}, action){
    if(action.type === TYPES.CHANNEL_DATA){
        return {
            ...state,
            channelslist: action.payload.channelslist
        }
    }else if(action.type === TYPES.CHANNEL_SELECT) {
        return{
            ...state,
            selectedChannel: action.payload.channelId
        }
         
    } else {
        return state
    }

}


export function MessageReducer(state = {messageList:[{messageBody: 'default msg', userId: 'wQJc8h6teCY0WC45WFegSetkZpS2', channelId: 'rocQy5B8Fes59y7CzgB3'}]}, action){
    if (action.type === TYPES.MESSAGE_DATA){
        return{
            ...state,
            messageList: action.payload.messageList
        }
    } else {
        return state
    }
}

