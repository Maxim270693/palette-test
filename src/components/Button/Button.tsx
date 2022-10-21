import React, {MouseEvent} from 'react';

type ButtonType = {
    children: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const Button = ({children, onClick, className}: ButtonType) => {

    const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
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