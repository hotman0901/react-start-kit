import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import todo from './todo';

export default history =>
    combineReducers({
        router: connectRouter(history),
        todo,
    });
