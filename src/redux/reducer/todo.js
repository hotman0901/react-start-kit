import * as actionTypes from '../actionTypes/todo';
import update from 'immutability-helper';

// inital
const initialState = {
    todos: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.ADD_TODO: {
            return update(state, {
                todos: { $set: [...state.todos, action.payload] },
            });
        }
        case actionTypes.DELETE_TODO: {
            const { payload } = action;
            const data = state.todos.filter(o => payload !== o.id);
            return update(state, {
                todos: { $set: data },
            });
        }
        default:
            return state;
    }
};
export default reducer;
