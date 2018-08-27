import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import store from "./redux/store";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export default class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  } 
} 

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
