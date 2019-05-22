import { createAction } from 'redux-actions';
import * as types from '../actionTypes/todo';
import wait from 'waait';

export const addLoading = createAction(types.ADD_LOADING, () => null);

export const addTodo = createAction(types.ADD_TODO, async payload => {
    // addLoading();
    // 假設call api
    await wait(1000);
    return payload;
});
// 也可以這樣簡寫
// export const addTodo = createAction(types.ADD_TODO);
export const deleteTodo = createAction(types.DELETE_TODO);
