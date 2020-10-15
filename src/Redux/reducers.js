import TYPES from "./type";
import { combineReducers } from 'redux'


export function userReducer(state = { authState: true, uid: 'wQJc8h6teCY0WC45WFegSetkZpS2', photoUrl: null, displayName: 'Rowan'
}, action){
    if(action.type === TYPES.USER_DATA){
        return {
            ...state,
            ...action.payload
        }
    }else if (action.type === TYPES.USER_DISCONNECT){
        return {
            ...state,
            ...action.payload
        }
    } else if(action.type === TYPES.USER_UPDATE){
            return{
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

export function channelReducer(state = {channelslist:[{name: 'General'}], selectedChannel: {id: ''}}, action){ //general is default channel
    if(action.type === TYPES.CHANNEL_DATA){
        return {
            ...state,
            channelslist: action.payload.channelslist
        }
    }else if(action.type === TYPES.CHANNEL_SELECT) {
        return{
            ...state,
            selectedChannel: action.payload
        }
         
    } else {
        return state
    }

}


export function MessageReducer(state = {messageList:[{messageBody: 'default msg', displayName:'rowan', userId: 'wQJc8h6teCY0WC45WFegSetkZpS2', channelId: 'ZKHtEYB7B6foq4qDpkv8'}]}, action){
    if (action.type === TYPES.MESSAGE_DATA){
        return{
            ...state,
            messageList: action.payload.messageList
        }
    } else {
        return state
    }
}

