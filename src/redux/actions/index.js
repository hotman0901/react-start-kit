import * as actionTypes from '../actionTypes';
import update from 'immutability-helper';

// inital
const initialState = {
    list: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.ADD_LIST: {
            return update(state, {
                data: { $set: action.data },
            });
        }

        default:
            return state;
    }
};
export default reducer;
