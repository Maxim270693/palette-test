import {ActionType, InitialStateType, PaletteType, FormDataType, Nullable} from "../../types/types";
import {
    COLOR,
    ID_CHANGE_COLOR,
    REMOVE_COLOR,
    SET_COLOR, SET_FORM_DATA,
    UPDATE_COLOR,
} from "../../constants/constants";

export const initialState = {
    formData: {} as FormDataType,
    palette: [] as PaletteType[],
    color: '#fff',
    idChangeColor: null as Nullable<number>,
}

export const reducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_FORM_DATA:
            return {...state, formData: action.payload}
        case SET_COLOR:
            return {...state, palette: [...state.palette, ...action.payload]}
        case REMOVE_COLOR:
            return {...state, palette: state.palette.filter(item => item.id !== action.payload)}
        case UPDATE_COLOR:
            return {
                ...state, palette: state.palette.map(item => {
                    return item.id === action.id ? {...item, backGroundColor: state.color} : item
                })
            }
        case COLOR:
            return {...state, color: action.payload}
        case ID_CHANGE_COLOR:
            return {...state, idChangeColor: action.payload}
        default:
            return state;
    }
};