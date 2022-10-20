import React from 'react';
import Button from "../Button/Button";
import './Palette.scss';
import removeIcon from '../../image/Remove.png';

const Palette = () => {
    return (
        <div className="paletteWrapper">
            <ul className="colorBlock">
                <li>
                    <img src={removeIcon}
                         alt="removeIcon"
                         className="removeIcon"
                    />
                </li>
                <li>
                    <img src={removeIcon}
                         alt="removeIcon"
                         className="removeIcon"
                    />
                </li>
                <li>
                    <img src={removeIcon}
                         alt="removeIcon"
                         className="removeIcon"
                    />
                </li>
                <li>
                    <img src={removeIcon}
                         alt="removeIcon"
                         className="removeIcon"
                    />
                </li>
                <li>
                    <img src={removeIcon}
                         alt="removeIcon"
                         className="removeIcon"
                    />
                </li>
                <li>
                    <img src={removeIcon}
                         alt="removeIcon"
                         className="removeIcon"
                    />
                </li>
                <li>
                    <img src={removeIcon}
                         alt="removeIcon"
                         className="removeIcon"
                    />
                </li>
                <li>
                    <img src={removeIcon}
                         alt="removeIcon"
                         className="removeIcon"
                    />
                </li>
            </ul>

            <Button className="btn">Добавить цвет</Button>
        </div>
    );
};

export default Palette;