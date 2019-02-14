import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MemoryRouter  } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import  ordersReducer from './store/reducers/orders';
import productsReducer   from './store/reducers/products';
import notesReduser from './store/reducers/notes';
import helper from './utils/helper';
import addressReducer from './store/reducers/address';
import subscriptionReduser from './store/reducers/subscriptions';
import parsedProductsReducer from './store/reducers/parcedProducts'
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';

helper();

const rootReducer = combineReducers ( {
    auth: authReducer,
    notes:notesReduser,
    address:addressReducer,
    subscriptions:subscriptionReduser,
    orders:ordersReducer,
    products:productsReducer,
    parcedProducts:parsedProductsReducer
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
