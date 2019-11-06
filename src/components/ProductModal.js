import React, { PureComponent } from 'react';
import { find as _find } from 'lodash';
import { Button, Modal, Input, Form } from 'semantic-ui-react';

class ProductModal extends PureComponent {
    state = {
        name: '',
        count: 0,
        onStores: 0
    }

    handleOnMount = () => {
        const { productId } = this.props;

        if (productId) {
            const product = _find(this.props.products, product => {
                if (product.id === productId) {
                    return product;
                }
            });

            this.setState({...product});
        }
    }

    handleOnChange = prop => event => this.setState({ [prop]: event.target.value });

    handleSave = event => {
        event.preventDefault();

        const { productId } = this.props;
        const date = new Date();
        const id = date.getMilliseconds();

        const product = {
            id: productId ? productId : id,
            name: this.state.name,
            count: this.state.count,
            onStores:  this.state.onStores
        };

        productId ?
            this.props.editProduct(product) :
            this.props.addProduct(product);

        this.setState({ name: '', count: 0, onStores: 0 }, () => {
            this.props.onClose();
        });
    };

    handleClose = () => {
        this.setState({ name: '', count: 0, onStores: 0 }, () => {
            this.props.onClose();
        });
    }

    render() {
        const { open, productId } = this.props;
        const { name, count } = this.state;

    return (
      <Modal
        size='small'
        open={open}
        onClose={this.handleClose}
        onMount={this.handleOnMount}
        >
        <Modal.Header>{productId ? 'Edit product' : 'Add product'}</Modal.Header>
          <Modal.Content>
            <Form>
                <Form.Field onSubmit={this.handleSave}>
                  <label>Name</label>
                  <input
                      placeholder='Name'
                      type='text'
                      value={name}
                      onChange={(e) => this.handleOnChange('name')(e)}
                   />
                </Form.Field>
                <Form.Field>
                  <label>Count</label>
                  <input
                      value={count}
                      type='number'
                      onChange={(e) => this.handleOnChange('count')(e)}
                   />
                </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
                negative
                onClick={this.handleClose}
                content='Close'
            />
            <Button
                positive
                icon='checkmark'
                labelPosition='right'
                content={productId ? 'Edit' : 'Add'}
                onClick={this.handleSave}
            />
          </Modal.Actions>
      </Modal>
    )
  }
}

export default ProductModal;
