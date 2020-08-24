import {StateType} from "../types/types";

const state: StateType<null> = {
    user: null,
    token: '',
    message: {text: '', isRed: true, visible: false}
}

export default state