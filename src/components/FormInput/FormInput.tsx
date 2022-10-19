import React from 'react';
import './FormInput.scss';

type FormInputType = {
    type?: string;
    placeholder?: string;
    name?: string;
    label?: string;
    className?: string;
    src?: string;
}

const FormInput = ({
                       type,
                       placeholder,
                       name,
                       label,
                       className,
                       src
                   }: FormInputType) => {
    return (
        <div className="formInput">
            <label className="label">{label}</label>

            <input type={type}
                   placeholder={placeholder}
                   name={name}
                   className={className}
                   src={src}
            />
        </div>
    );
};

export default FormInput;