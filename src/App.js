import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from './config';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuComponent from './components/Menu';
import Products from './containers/Products';
import Stores from './containers/Stores';

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <MenuComponent />

                    <Switch>
                        <Route path="/stores">
                            <Stores />
                        </Route>
                        <Route exact path="/products">
                            <Products />
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
