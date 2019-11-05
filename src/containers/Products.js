import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { find as _find, size as _size } from 'lodash';
import TableComponent from './../components/Table';
import ProductModal from './../components/ProductModal';
import * as actions from './../actions';

class Products extends Component {
  state = {
    open: false,
    product: {}
  };

  handleShowModal = productId => {
    const date = new Date();
    const id = date.getMilliseconds();

    const product = _find(this.props.products, product => product.id === productId);

    this.setState({
      product: _size(product) ? product : { id, name: '', count: 0, onStores: 0 },
      open: true
    });
  }

  handleCloseModal = () => this.setState({ product: {}, open: false });
  handleOnChange = event => this.setState({ product: { name: event.target.value } });
  handleSave = (product) => {
    _size(product) ? this.props.onEditProduct(this.state.product) : this.props.addProduct(this.state.product)

    this.setState({ product: {}, open: false });
  };

  handleEditProduct = () => {
    this.props.onEditProduct(this.state.product);
  }

  render() {
    return (
      <>
      <Button
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='small'
                                onClick={this.handleShowModal}
                            >
                                <Icon name='add' /> Add
                            </Button>

                            <TableComponent
                                dataList={this.props.products}
                                title='Product'
                                onRemove={this.props.removeProduct}
                                onEdit={this.handleShowModal}
                                {...this.props}
                            />

                            <ProductModal
                                {...this.props}
                                {...this.state}
                                onChange={this.handleOnChange}
                                onClose={this.handleCloseModal}
                                onSave={this.handleSave}
                            />
      </>
    )
  }
}

const mapStateToProps = ({ products, stores }) => ({
  stores,
  products,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Products);
