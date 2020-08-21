import ACTION from "./actionName";

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case ACTION.LOG_IN:
            console.log('login reducer call')
            return {...state, user: action.user};
        case ACTION.LOG_OUT:
            console.log('login reducer call')
            return {...state, user: action.user};
        default:
            return state;
    }
};
export default reducer