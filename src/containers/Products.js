import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TableComponent from './../components/Table';
import ProductModal from './../components/ProductModal';
import * as actions from './../actions';

class Products extends Component {
  state = {
    open: false,
    productId: 0
  };

  handleShowModal = productId => this.setState({
      productId: productId,
      open: true
  });

  handleCloseModal = () => this.setState({ open: false, productId: 0 });

  render() {
    return (
      <>
      <Button
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='small'
                                onClick={() => this.handleShowModal()}
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
                                onClose={this.handleCloseModal}
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
