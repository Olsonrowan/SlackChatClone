import React from 'react'
import { connect } from 'react-redux';
import {db} from '../services/firebase'
import {channelsAction, channelSelect, messageAction} from '../Redux/actionCreators'
import firebase from 'firebase'
// import { getChatList } from '../helpers/db'



class ChatMenu extends React.Component{
  state={
    addChannel: ''
  }


  addChannel = (event) =>{
    event.preventDefault()
    try{
    db.collection('Channels').add({name: this.state.addChannel, dateCreated: new Date()})
    this.getChatList()
    }catch(err){
      console.log(err)
    }


  }




  selectChannel = (channel) =>{
    console.log(channel.id)
    this.props.channelSelect(channel)
    this.getMessages()
  } 

  handleChange = (event) =>{
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
}

   getChatList = async () =>{
    return await db.collection('Channels').orderBy('dateCreated', 'desc').get().then(response =>{
      let channelArr = [];
      response.forEach(channel => {
        channelArr.push({...channel.data(), id: channel.id})
      });
      this.props.channelsAction(channelArr)
      return channelArr;
    }, reject =>{
      console.log(reject)
    })
  }


  getMessages = () =>{
    console.log(this.props.selectedChannel)
    firebase.firestore().collection('messages').where("channelId", "==", this.props.selectedChannel.id).get().then( response =>{
        let messagesArr = [];
        response.forEach(message => {
            messagesArr.push({...message.data(), id: message.id})
          });
          console.log(messagesArr)
          this.props.messageAction(messagesArr)

          return messagesArr;
        }, reject =>{
          console.log(reject)
        })

    }



  componentDidMount() {
    this.getChatList()
    
      }
      
  render(){
      return(
          <div className="ui container">
            <form >
              <input
              name="addChannel"
              type='text' 
              id="addChannel" 
              placeholder="Channel Name" 
              onChange={ this.handleChange } 
              value={this.state.addChannel}
              />
               <span className="ui horizontal divider"> </span>
              <button className="ui blue small button" onClick={this.addChannel}> ADD CHANNEL</button>
            </form>
            <div>
      {this.props.channelslist.map((channel, index) => <div id="Channels" className="ui aligned segment"  key={index} onClick={() =>  this.selectChannel(channel)}><p >{channel.name}</p></div>)}
            </div>
          </div>
      )
  }
}



const mapStateToProps = state =>({
  channelslist: state.channels.channelslist,
  selectedChannel: state.channels.selectedChannel,
  messageList: state.messages.messageList,

})

const mapDispatchToProps ={
  channelsAction,
  channelSelect,
  messageAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMenu)