import React from 'react';
import Button from "../Button/Button";
import './Palette.scss';
import ColorPicker from "../ColorPicker/ColorPicker";
import {useDispatch} from "react-redux";
import {getColorPicker} from "../../bll/actions/actions";
import {useAppSelector} from "../../types/types";
import removeIcon from "../../image/Remove.png";

const Palette = () => {
    const dispatch = useDispatch();

    const isShowColorPicker = useAppSelector<boolean>(state => state.reducer.isShowColorPicker);

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

            {
                isShowColorPicker &&
                <ColorPicker/>
            }

            <Button className="btn"
                    onClick={(event: any) => {
                        event.stopPropagation();
                        dispatch(getColorPicker(true))
                    }}
            >
                Добавить цвет
            </Button>
        </div>
    );
};

export default Palette;