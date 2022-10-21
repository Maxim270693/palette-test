import {rootReducer} from "../bll/store/store";
import {initialState} from "../bll/reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

// type null
export type Nullable<T> = T | null;

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
export type ActionType = any