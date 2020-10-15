import TYPES from './type'
import firebase from 'firebase'

export function userAction(userInfo){
    firebase.firestore().collection('Users').add({ uid: userInfo.uid, displayName: userInfo.displayName})

    return {
        type: TYPES.USER_DATA,
        payload: {
            ...userInfo,
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


export function channelSelect(selectedChannel){
return{
    type: TYPES.CHANNEL_SELECT,
    payload:{
        ...selectedChannel
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


export function userLogout(authState){
    return{
        type: TYPES.USER_DISCONNECT,
        payload:{
            authState: false
        }
    }

}

export function userUpdate(userInfo){
    return{
        type: TYPES.USER_UPDATE,
        payload:{
            ...userInfo
        }
    }

}