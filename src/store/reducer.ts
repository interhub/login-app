import ACTION from "./actionName";

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case ACTION.SET_USER:
            return {...state, user: action.user};
        case ACTION.LOG_OUT:
            console.log('LOG_OUT CALL')
            return {...state, user: null};
        default:
            return state;
    }
};
export default reducer