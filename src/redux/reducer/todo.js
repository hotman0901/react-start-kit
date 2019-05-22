import * as actionTypes from '../actionTypes/todo';
// import update from 'immutability-helper';
import produce from 'immer';

// inital
const initialState = {
    todos: [],
};

/* immer */
const reducer = produce((draft = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.ADD_TODO: {
            draft.todos = [...draft.todos, action.payload];
            return;
            // return draft;
            // 這兩種都可以
        }
        case actionTypes.DELETE_TODO: {
            const { payload } = action;
            draft.todos = draft.todos.filter(o => payload !== o.id);
            return;
        }
        default:
            return draft;
    }
});

/* immutability-helper
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
 */

export default reducer;
