import {rootReducer} from "../bll/store/store";
import {initialState} from "../bll/reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {
    getColorPicker,
    removeColor,
    setBlockColor,
    setColor, setFormData,
    updateColor
} from "../bll/actions/actions";

// type null
export type Nullable<T> = T | null;

// type palette
export type PaletteType = {
    id: number,
    title: string,
    backGroundColor: string,
}

//type responseFormData
export type FormDataType = {
    status: string,
    msg?: string,
}

export type FormInterface = {
    [key: string]: string
}

// type store
export type RootStateType = ReturnType<typeof rootReducer>;

// type initialState
export type InitialStateType = typeof initialState;

// type useSelector
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

// type ActionType
export type ActionType =
    SetFormDataActionType
    | SetBlockColorActionType
    | RemoveColorActionType
    | UpdateColorActionType
    | SetColorActionType
    | GetColorPickerActionType;

export type SetFormDataActionType = ReturnType<typeof setFormData>;
export type SetBlockColorActionType = ReturnType<typeof setBlockColor>;
export type RemoveColorActionType = ReturnType<typeof removeColor>;
export type UpdateColorActionType = ReturnType<typeof updateColor>;
export type SetColorActionType = ReturnType<typeof setColor>;
export type GetColorPickerActionType = ReturnType<typeof getColorPicker>;