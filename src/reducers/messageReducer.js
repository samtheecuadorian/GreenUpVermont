import * as types from '../constants/actionTypes';
import initialState from './initialState';
export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case types.NEW_MESSAGE:
            return {
                ...state,
                messages: [].concat(state.messages).concat(action.message)
            };
        default:
            return state;
    }
}
