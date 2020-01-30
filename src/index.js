import React from 'react';
import ReactDOM from 'react-dom';
// Styles
import './styles/index.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
// Components
import App from './components/App';
// Services
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
// Reducer
import { rootReducer } from "./reducers/reducers";
// Store
const store = createStore(rootReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
, document.getElementById('root'));
registerServiceWorker();