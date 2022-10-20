import React, {ChangeEvent, useRef, useState} from 'react';
import './Form.scss';
import FormInput from "../FormInput/FormInput";
import vector from "../../image/Vector.png";
import Button from "../Button/Button";
import {FormInterface} from "../../types/types";

const Form = () => {
    const [imageURL, setImageURL] = useState<{ image: string }>();

    const fileContent = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        let formObj: FormInterface = {}
        for (let [key, value] of Array.from(formData.entries())) {
            formObj[key] = value.toString()
        }
    }

    const handlePick = () => {
        fileContent?.current?.click();
    }

    const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImageURL({
                image: URL.createObjectURL(img)
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
                       name="lastName"
                       label="Фамилия"
                       className="input"
            />
            <FormInput placeholder="Отчество"
                       name="middleName"
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
            />

            <Button className="saveButton">
                Сохранить
            </Button>

            <div className="responseBlock">
                <label className="label">Response</label>
                <textarea></textarea>
            </div>

        </form>
    );
};

export default Form;