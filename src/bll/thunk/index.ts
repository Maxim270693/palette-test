import {Dispatch} from "redux";
import {API} from "../../api/API";
import {FormInterface} from "../../types/types";
import {setFormData} from "../actions/actions";

export const postFormDataTC = (action: string, id: number, image: string, contact: FormInterface) => async (dispatch: Dispatch) => {
    try {
        const {data} = await API.postFormData(action, id, image, contact)
        dispatch(setFormData(data));
    } catch (error) {
        console.log('Axios request failed:', error);
    }
}