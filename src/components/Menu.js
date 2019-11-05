import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {
  Link
} from "react-router-dom";

class MenuComponent extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          <Link to='/stores'>Stores</Link>
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          <Link to='/products'>Products</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default MenuComponent;
