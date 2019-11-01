import React from 'react';
import { Provider } from 'react-redux';
import store from './config';
import './App.css';

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              Hellow world
          </div>
      </Provider>
  );
}

export default App;
