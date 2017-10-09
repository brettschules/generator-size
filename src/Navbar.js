import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) =>  {
    this.setState({
       activeItem: name
     })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted size="massive" fluid={true}>
        <Menu.Item name='Home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='About' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Item name='Contact' active={activeItem === 'friends'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
