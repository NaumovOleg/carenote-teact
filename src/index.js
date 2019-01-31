import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MemoryRouter  } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import planReducer from './store/reducers/plan';
import productsReducer   from './store/reducers/products';
import notesReduser from './store/reducers/notes';
import helper from './utils/helper';
import RCustomerReduser from './store/reducers/rechrgeCustomer';
import addressReducer from './store/reducers/address';
import subscriptionReduser from './store/reducers/subscriptions'
helper();

const rootReducer = combineReducers ( {
    auth: authReducer,
    //plan: planReducer,
    //products:productsReducer,
    notes:notesReduser,
    r_customer:RCustomerReduser,
    address:addressReducer,
    subscriptions:subscriptionReduser

} );
const logger = store => {
    return next => {
        return action => {
            const result = next ( action );
            return result;
        };
    };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore ( rootReducer, composeEnhancers ( applyMiddleware ( logger, thunk ) ) );
const app = (
    <Provider store={store}>
        <MemoryRouter >
            <App />
        </MemoryRouter>
    </Provider>
);

ReactDOM.render ( app, document.getElementById ( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
