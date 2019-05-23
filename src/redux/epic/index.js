import { combineEpics } from 'redux-observable';
import todoEpic from './todo';

const rootEpic = combineEpics(...todoEpic);

export default rootEpic;
