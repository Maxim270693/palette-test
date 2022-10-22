import React, {ChangeEvent, LegacyRef} from 'react';
import './FormInput.scss';

type FormInputType = {
    type?: string;
    placeholder?: string;
    name?: string;
    label?: string;
    className?: string;
    src?: string;
    fileContent?: LegacyRef<HTMLInputElement>;
    accept?: string;
    onImageChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string
}

const FormInput = ({
                       type,
                       placeholder,
                       name,
                       label,
                       className,
                       src,
                       fileContent,
                       accept,
                       onImageChange,
                       value,
                   }: FormInputType) => {
    return (
        <div className="formInput">
            <label className="label">{label}</label>

            <input type={type}
                   placeholder={placeholder}
                   name={name}
                   className={className}
                   src={src}
                   accept={accept}
                   ref={fileContent}
                   onChange={onImageChange}
                   value={value}
            />
        </div>
    );
};

export default FormInput;