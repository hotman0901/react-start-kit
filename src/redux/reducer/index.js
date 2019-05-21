import { combineReducers } from 'redux';
import todo from './todo';

// 有多個reducer 合併用
const rootReducer = combineReducers({
    todo,
});

export default rootReducer;
