import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createRootReducer from '../reducer';

let basename = '/';
if (process.env.REACT_APP_BASEURL === 'gitpage') {
    basename = '/react-start-kit';
}
export const history = createBrowserHistory({ basename });

// 判斷要不要開啟REDUX_DEVTOOLS
export default function configureStore(preloadedState) {
    let store = '';
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const logger = createLogger();
    if (process.env.REACT_APP_ENV === 'dev') {
        // store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));
        store = createStore(
            createRootReducer(history),
            preloadedState,
            composeEnhancer(applyMiddleware(thunk, routerMiddleware(history), logger))
        );
    } else {
        store = createStore(createRootReducer(history), preloadedState, applyMiddleware(thunk));
    }
    return store;
}
