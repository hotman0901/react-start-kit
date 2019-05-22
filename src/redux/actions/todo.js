import { createAction } from 'redux-actions';
import * as types from '../actionTypes/todo';
import wait from 'waait';

// loading
export const isLoading = createAction(types.ADD_LOADING);
// 成功
export const addSuc = createAction(types.ADD_TODO_SUC);

export const addTodo = payload => async dispatch => {
    dispatch(isLoading(true));
    await wait(1000);
    dispatch(addSuc(payload));
    dispatch(isLoading(false));
};

// export const addTodo = createAction(types.ADD_TODO_SUC, async payload => {
//     // addLoading();
//     // 假設call api
//     await wait(1000);
//     return payload;
// });

// 也可以這樣簡寫
// export const addTodo = createAction(types.ADD_TODO_SUC);
export const deleteTodo = createAction(types.DELETE_TODO);
