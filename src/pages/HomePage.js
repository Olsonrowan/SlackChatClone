import React from 'react'
import ChatMenu from '../components/ChatMenu'
import Messages from '../components/Messages'
// import firebase from 'firebase'
import { messageAction } from '../Redux/actionCreators'
import { connect } from 'react-redux'


class Homepage extends React.Component{

    

    render(){
 return(

     <div>
         <h1>Home</h1>
         <ChatMenu/>
         <Messages/>
     </div>

 )
}
}

const mapStateToProps = state =>({
    messageList: state.messages.messageList,
    selectedChannel: state.channels.selectedChannel
  })
  
  const mapDispatchToProps ={
    messageAction
  }
  

export  default connect(mapStateToProps, mapDispatchToProps)(Homepage)

