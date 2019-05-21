import { createStore } from 'redux';
import reducer from '../reducer';

export default function stores() {
    let store = '';
    // 看是否為product
    if (process.REACT_APP_ENV === 'dev') {
        store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    } else {
        store = createStore(reducer);
    }
    return store;
}
