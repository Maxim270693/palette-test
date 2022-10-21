import {ActionType, InitialStateType} from "../../types/types";
import {COLOR, IS_SHOW_COLOR_PICKER} from "../../constants/constants";
import {ColorResult} from "react-color";

export const initialState = {
    palette: [],
    color: '#fff' as unknown as ColorResult,
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