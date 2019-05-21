import * as actionTypes from '../actionTypes/todo';
import update from 'immutability-helper';

// inital
const initialState = {
    list: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.ADD_TODO: {
            return update(state, {
                list: { $set: [...state.list, action.payload] },
            });
        }
        case actionTypes.DELETE_TODO: {
            return update(state, {
                list: { $set: [...state.list].filter(item => action.payload !== item) },
            });
        }
        default:
            return state;
    }
};
export default reducer;
