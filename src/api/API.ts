import axios from "axios";
import {FormInterface} from "../types/types";

export const API = {
    postFormData(action: string, id: number, image: string, contact: FormInterface) {
        const dataObj = {
            action,
            id,
            image,
            ...contact,
        };
        const formData = new FormData()
        Object.entries(dataObj).forEach(([key, value]) => {
            formData.append(key, value.toString())
        })
        return axios.post('https://test-job.pixli.app/send.php', dataObj, {headers: {"Content-Type": "multipart/form-data"}})
    }
}