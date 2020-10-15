import React from 'react'
import ChatMenu from '../components/ChatMenu'
import Messages from '../components/Messages'
import InputMsg from '../components/InputMsg'
// import firebase from 'firebase'
import { messageAction } from '../Redux/actionCreators'
import { connect } from 'react-redux'
import Header from '../components/Header'


class Homepage extends React.Component{

    

    render(){
 return(
  <div>  
    <div>
        <Header/>
    </div>
    <div id="homePos">
      <div className="ui aligned segment small" style={{maxWidth: '345px', height: '100%', display: 'flex'}}>
        <ChatMenu/>
     </div>
    <div className="ui container" >
      <div className="ui container" >
        <Messages/>
      
        <InputMsg />
      </div>
      </div>
    </div>
         
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

