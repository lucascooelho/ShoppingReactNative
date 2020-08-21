import { LOGIN, SIGNUP, AUTHENTICATE, LOGOUT, SET_DIT_TRY_AL } from "../actions/auth.actions";

const initialState = {
    token: null,
    userId: null,
    didTryAutoLogin: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                token: action.token,
                userId: action.userId,
                authScreenOptions: true
            };
        case SET_DIT_TRY_AL:
            return {
                ...state,
                didTryAutoLogin: true
            };
        case LOGOUT: 
            return { 
                ...initialState,
                didTryAutoLogin: true 
            };
        // case LOGIN:
        //     return {
        //         token: action.token,
        //         userId: action.userId
        //     };
        // case SIGNUP:
        //     return {
        //         token: action.token,
        //         userId: action.userId
        //   };
        default:
            return state;
    }
};