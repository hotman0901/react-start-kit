import * as types from '../actionTypes/todo';

// export const addTodo = payload => ({
//     type: types.ADD_TODO,
//     payload,
// });

// 使用async，必須設置applyMiddleware
// export const addTodo = payload => dispatch => dispatch({ type: types.ADD_TODO$, payload });
export const addTodo = payload => ({
    type: types.ADD_TODO$,
    payload,
});
export const addTodSuc = payload => ({
    type: types.ADD_TODO_SUC,
    payload,
});
export const addTodoErr = payload => ({
    type: types.ADD_TODO_ERR,
    payload,
});

// 可參考下列寫法
// export const xxx = () => (dispatch) => {
//     dispatch({ type: REQUEST_ROBOT_PENDING});
//     fetch('https://xxxxx.xxx.xx')
//     .then(res => res.json())
//     .then(data => dispach({ type: REQUEST_ROBOT_SUC}, payload: data))
//     .catch( err => dispach({ type: REQUEST_ROBOTERR}, payload: err) )
// }

export const deleteTodo = payload => ({
    type: types.DELETE_TODO$,
    payload,
});
export const deleteTodoSuc = payload => ({
    type: types.DELETE_TODO_SUC,
    payload,
});
export const deleteTodoErr = payload => ({
    type: types.DELETE_TODO_ERR,
    payload,
});
