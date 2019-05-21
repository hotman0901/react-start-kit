import { createStore } from 'redux';
import reducer from '../reducer';

// 判斷要不要開啟REDUX_DEVTOOLS
export default function stores() {
    let store = '';
    if (process.REACT_APP_ENV === 'dev') {
        store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    } else {
        store = createStore(reducer);
    }
    return store;
}
