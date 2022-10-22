import {
    SET_FORM_DATA,
    COLOR,
    ID_CHANGE_COLOR,
    REMOVE_COLOR,
    SET_COLOR,
    UPDATE_COLOR
} from "../../constants/constants";
import {PaletteType, FormDataType, Nullable} from "../../types/types";

export const setFormData = (payload: FormDataType) => ({type: SET_FORM_DATA, payload} as const)
export const setBlockColor = (payload: PaletteType[]) => ({type: SET_COLOR, payload} as const);
export const removeColor = (payload: number) => ({type: REMOVE_COLOR, payload} as const);
export const updateColor = (id: number) => ({type: UPDATE_COLOR, id} as const);
export const setColor = (payload: string) => ({type: COLOR, payload} as const);
export const getColorPicker = (payload: Nullable<number>) => ({ // nen
    type: ID_CHANGE_COLOR,
    payload
} as const);