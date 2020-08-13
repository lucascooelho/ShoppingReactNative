import { LOGIN, SIGNUP, AUTHENTICATE, LOGOUT } from "../actions/auth.actions";

const initialState = {
    token: null,
    userId: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                token: action.token,
                userId: action.userId
            };
        case LOGOUT: 
            return initialState;
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