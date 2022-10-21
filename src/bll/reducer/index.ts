import {ActionType, InitialStateType} from "../../types/types";
import {COLOR, IS_SHOW_COLOR_PICKER} from "../../constants/constants";

export const initialState = {
    palette: ['1','2'],
    color: '#fff',
    isShowColorPicker: false,
}

export const reducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case COLOR:
            return {...state, color: action.payload}
        case IS_SHOW_COLOR_PICKER:
            return {...state, isShowColorPicker: action.payload}
        default:
            return state;
    }
};