import { createAction } from 'redux-actions';
import * as types from '../actionTypes/todo';

export const addTodo = createAction(types.ADD_TODO);
export const deleteTodo = createAction(types.DELETE_TODO);
