import {ColorResult} from "react-color";
import {COLOR, IS_SHOW_COLOR_PICKER} from "../../constants/constants";

export const setColor = (payload: ColorResult) => ({type: COLOR, payload} as const);
export const getColorPicker = (payload: boolean) => ({
    type: IS_SHOW_COLOR_PICKER,
    payload
} as const);