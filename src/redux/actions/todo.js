import * as types from '../actionTypes/todo';

// export const addTodo = payload => ({
//     type: types.ADD_TODO,
//     payload,
// });

// 使用async，必須設置applyMiddleware
export const addTodo = payload => dispatch => dispatch({ type: types.ADD_TODO, payload });

export const deleteTodo = payload => ({
    type: types.DELETE_TODO,
    payload,
});
