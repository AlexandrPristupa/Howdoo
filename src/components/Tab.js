import React, { PureComponent } from 'react';
import { Tab } from 'semantic-ui-react';

class TabComponent extends PureComponent {
  render() {
    return (
      <Tab.Pane attached={false}>{this.props.children}</Tab.Pane>
    )
  }
}

export default TabComponent;
