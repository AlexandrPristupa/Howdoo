import React, { PureComponent } from 'react';
import { Button, Modal, Input } from 'semantic-ui-react';

class ProductModal extends PureComponent {
  render() {
    const { open, onChange, onClose, onSave, product: { name, count, onStrobe } } = this.props;

    return (
      <Modal size='small' open={open} onClose={onClose}>
        <Modal.Header>Add product</Modal.Header>
          <Modal.Content>
            <Input placeholder='Name' value={name} onChange={onChange} />
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={onClose}>Close</Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='Add'
              onClick={onSave}
            />
          </Modal.Actions>
      </Modal>
    )
  }
}

export default ProductModal;
