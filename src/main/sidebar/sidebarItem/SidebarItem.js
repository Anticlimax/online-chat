import React, { Component } from 'react'
import './SidebarItem.less'
// class SidebarItem extends Component {
//   render () {
//     return (
//       <div className="sidebarItem">
//         SidebarItem
//         name: {this.props.name}|
//         unreadMessage: {this.props.unreadMessage}|
//         latestMessage: {this.props.latestMessage}
//       </div>
//     )
//   }
// }

export const SidebarItem = ({name, unreadMessage, latestMessage}) => {
  return (
    <div className="sidebarItem">
    SidebarItem
    name: {name}|
    unreadMessage: {unreadMessage}|
    latestMessage: {latestMessage}
  </div>
  )
}

export default SidebarItem