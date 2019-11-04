import React, { PureComponent } from 'react';
import { Tab, Button, Modal, Icon, Input } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TableComponent from './components/Table';
import TabComponent from './components/Tab';
import * as actions from './actions';

const panes = [
    {
        menuItem: 'Stores',
        render: ({ props }) => (
            <TabComponent>
                <TableComponent
                    dataList={props.stores}
                    title='store'
                    {...props}
                />
            </TabComponent>
        ),
    },
    {
        menuItem: 'Products',
        render: ({ props }) => (
            <TabComponent>
                <TableComponent
                    dataList={props.products}
                    title='product'
                    {...props}
                />
            </TabComponent>
        ),
    }
]
  

class App extends PureComponent {
    state = {
        open: false,
        value: ''
    };

    show = () => this.setState({ open: true });
    close = () => this.setState({ open: false });
    handleOnChange = event => this.setState({ value: event.target.value });
    handleAdd = () => {
        const date = new Date();
        const id = date.getMilliseconds();

        const value = {
            id,
            name: this.state.value,
            count: 10,
            onStores: 5
        };

        this.props.addProduct(value);
    };

    render() {
        const { open } = this.state;

        console.log(open);

        return (
            <>
                <Button
                    floated='right'
                    icon
                    labelPosition='left'
                    primary
                    size='small'
                    onClick={this.show}
                >
                    <Icon name='add' /> Add
                </Button>

                <Tab
                    props={this.props}
                    menu={{ secondary: true, pointing: true }}
                    panes={panes}
                    onTabChange={(event, data) => {
                        console.log(event);
                        console.log(data);
                    }} 
                />

                <Modal size='small' open={open} onClose={this.close}>
                    <Modal.Header>Delete Your Account</Modal.Header>
                    <Modal.Content>
                        <Input placeholder='Add item' onChange={this.handleOnChange} />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={this.close}>Close</Button>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='Yes'
                            onClick={this.handleAdd}
                        />
                    </Modal.Actions>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = ({ products, stores }) => ({
    stores,
    products
})
  
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
