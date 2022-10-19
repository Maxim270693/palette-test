import React, {FormEvent} from 'react';
import './Form.scss';
import FormInput from "../FormInput/FormInput";
import vector from "../../image/Vector.png";
import Button from "../Button/Button";

type FormInterface = {
    [key: string]: string
}

const Form = () => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        let formObj: FormInterface = {}
        for (let [key, value] of Array.from(formData.entries())) {
            formObj[key] = value.toString()
        }
    }

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
            <FormInput name="image"
                       label="Фото"
                       className="imageWrapper"
                       type="image"
                       src={vector}
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