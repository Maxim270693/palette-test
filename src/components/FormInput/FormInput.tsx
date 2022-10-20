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
            />
        </div>
    );
};

export default FormInput;