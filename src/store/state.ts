import {StateType} from "../types/types";
import {LOADING_STATE_NAME, loadingStateMachine} from "../variable/LOADING_STATE";

const state: StateType<null> = {
    user: null,
    token: '',
    message: {text: '', isRed: true, visible: false},
    loading: loadingStateMachine(LOADING_STATE_NAME.SUCCESS)
}

export default state