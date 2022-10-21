import React from 'react';

type ButtonType = {
    children: string;
    onClick?: (event:any) => void;
    className?: string;
}

const Button = ({children, onClick, className}: ButtonType) => {

    const handleOnClick = (event?:any) => {
        onClick?.(event)
    };

    return (
        <div>
            <button
                className={className}
                onClick={handleOnClick}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;