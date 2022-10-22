import React, {MouseEvent} from 'react';
import Button from "../Button/Button";
import './Palette.scss';
import ColorPicker from "../ColorPicker/ColorPicker";
import {batch, useDispatch} from "react-redux";
import {getColorPicker, removeColor, setBlockColor, setColor,} from "../../bll/actions/actions";
import {Nullable, PaletteType, useAppSelector} from "../../types/types";
import removeIcon from "../../image/Remove.png";
import {WHITE_COLOR} from "../../constants/constants";

const Palette = () => {
    const dispatch = useDispatch();

    const idChangeColor = useAppSelector<Nullable<number>>(state => state.reducer.idChangeColor);
    const palette = useAppSelector<PaletteType[]>(state => state.reducer.palette);

    const onClickButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();

        const newColor = {
            id: Date.now() + Math.random(),
            title: '',
            backGroundColor: WHITE_COLOR,
        }

        batch(() => {
            dispatch(getColorPicker(newColor.id))
            dispatch(setColor(WHITE_COLOR))
            dispatch(setBlockColor([newColor]))
        })
    }

    return (
        <div className="paletteWrapper">
            <ul className="colorBlock">
                {
                    palette.map(item => {
                        const onClickItemHandler = (event: MouseEvent<HTMLLIElement>) => {
                            event.stopPropagation();
                            batch(() => {
                                dispatch(getColorPicker(item.id))
                                dispatch(setColor(item.backGroundColor))
                            })
                        }

                        const removeOnHandler = (id: number) => {
                            dispatch(removeColor(id))
                        }

                        const onClickImgHandler = (event: MouseEvent<HTMLImageElement>) => {
                            event.stopPropagation();
                            removeOnHandler(item.id)
                        }

                        return (
                            <li key={item.id}
                                style={{backgroundColor: item.backGroundColor}}
                                onClick={onClickItemHandler}
                            >
                                {item.title}

                                <img src={removeIcon}
                                     alt="removeIcon"
                                     className="removeIcon"
                                     onClick={onClickImgHandler}
                                />
                            </li>
                        )
                    })
                }
            </ul>

            {
                idChangeColor && <ColorPicker/>
            }

            <Button className="btn"
                    onClick={onClickButtonHandler}
            >
                Добавить цвет
            </Button>
        </div>
    );
};

export default Palette;