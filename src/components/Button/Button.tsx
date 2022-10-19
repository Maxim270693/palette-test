import React from 'react';

type ButtonType = {
    children: string;
    className?: string;
}

const Button = ({children, className}: ButtonType) => {
    return (
        <div>
            <button className={className}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;