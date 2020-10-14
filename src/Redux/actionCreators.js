import TYPES from './type'
export function userAction(userInfo){
    return {
        type: TYPES.USER_DATA,
        payload: {
            uid: userInfo.user.uid,
            displayName: userInfo.user.displayName,
            photoUrl: userInfo.user.photoURL,
            authState: true
        }
    }

}

export function channelsAction(channelslist){
    return {
        type: TYPES.CHANNEL_DATA,
        payload: {
            channelslist 
        }
    }

}


export function channelSelect(channelId){
return{
    type: TYPES.CHANNEL_SELECT,
    payload:{
        channelId
    }
}
}

export function messageAction(messageList){
    return{
        type: TYPES.MESSAGE_DATA,
        payload:{
            messageList
        }
    }
}


