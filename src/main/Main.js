import React, {Component} from 'react'
import Sidebar from './sidebar/Sidebar'
import InputArea from './inputArea/InputArea'
import ChatArea from './chatArea/ChatArea'
import './Main.less'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="sidebarWrapper">
          <Sidebar></Sidebar>
        </div>
        <div className="mainWrapper">
          <div className="chatAreaWrapper">
            <ChatArea></ChatArea>
          </div>
          <div className="inputAreaWrapper">
            <InputArea></InputArea>
          </div>
        </div>
      </div>
    )
  }
}

export default Main