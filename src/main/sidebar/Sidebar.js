import React, {Component} from 'react'
import SidebarItem from './sidebarItem/SidebarItem'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGroup: [
        {
          name: 'test',
          unreadMessage: 3,
          latestMessage: 'hello'
        }, {
          name: 'test',
          unreadMessage: 3,
          latestMessage: 'hello'
        }, {
          name: 'test',
          unreadMessage: 3,
          latestMessage: 'hello'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        Sidebar
        {this.state.activeGroup.map(({name, unreadMessage, latestMessage})=>{
          return <SidebarItem name={name} unreadMessage={unreadMessage} latestMessage={latestMessage}></SidebarItem>  
        })}
      </div>
    )
  }
}

export default Sidebar