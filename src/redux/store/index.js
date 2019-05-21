import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducer';

// 判斷要不要開啟REDUX_DEVTOOLS
export default function stores() {
    let store = '';
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const logger = createLogger();
    if (process.env.REACT_APP_ENV === 'dev') {
        // store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));
        store = createStore(reducer, composeEnhancer(applyMiddleware(thunk, logger)));
    } else {
        store = createStore(reducer, applyMiddleware(thunk));
    }
    return store;
}
