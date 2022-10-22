import React, {ChangeEvent, FormEvent, useRef, useState} from 'react';
import './Form.scss';
import FormInput from "../FormInput/FormInput";
import vector from "../../image/Vector.png";
import Button from "../Button/Button";
import {FormInterface, FormDataType, useAppSelector} from "../../types/types";
import {useDispatch} from "react-redux";
import {postFormDataTC} from "../../bll/thunk";

const Form = () => {
    const dispatch = useDispatch();

    const formData = useAppSelector<FormDataType>(state => state.reducer.formData);
    const [imageURL, setImageURL] = useState<{ image: string; file: File }>();

    const fileContent = useRef<HTMLInputElement>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        let formObj: FormInterface = {}
        for (let [key, value] of Array.from(formData.entries())) {
            formObj[`contact[${key}]`] = value.toString()
        }

        // @ts-ignore
        dispatch(postFormDataTC('send_data', 1, imageURL?.file, formObj))
    }

    const handlePick = () => {
        fileContent?.current?.click();
    }

    const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImageURL({
                image: URL.createObjectURL(img),
                file: img
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <FormInput placeholder="Имя"
                       name="name"
                       label="Имя"
                       className="input"
            />
            <FormInput placeholder="Фамилия"
                       name="surname"
                       label="Фамилия"
                       className="input"
            />
            <FormInput placeholder="Отчество"
                       name="patronymic"
                       label="Отчество"
                       className="input"
            />
            <FormInput type="file"
                       fileContent={fileContent}
                       label="Фото"
                       className="hidden"
                       accept="image/*,.png,.jpg,.gif,.web"
                       onImageChange={onImageChange}
            />

            <img src={imageURL ? imageURL.image : vector}
                 alt="photo"
                 onClick={handlePick}
                 className="imageWrapper"
                 tabIndex={0}
            />

            <Button className="saveButton">
                Сохранить
            </Button>

            <div className="responseBlock">
                <label className="label">Response</label>
                <textarea value={formData && formData.msg ? formData?.msg : formData.status}
                          onChange={() => {
                          }}
                          style={{color: '#fff'}}
                />
            </div>

        </form>
    );
};

export default Form;