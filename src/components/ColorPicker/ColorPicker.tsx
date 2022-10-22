import React, {useEffect, useRef} from 'react';
import {ChromePicker, ColorResult} from 'react-color';
import {useAppSelector} from "../../types/types";
import {batch, useDispatch} from "react-redux";
import {getColorPicker, setColor, updateColor} from "../../bll/actions/actions";


const ColorPicker = () => {
    const dispatch = useDispatch();
    const containerRef = useRef<HTMLDivElement>(null)
    const colorId = useAppSelector(state => state.reducer.idChangeColor)

    const color = useAppSelector<string>(state => state.reducer.color);

    useEffect(() => {
        const listener = ({target}: MouseEvent) => {
            if (!containerRef.current?.contains(target as Node)) {
                dispatch(getColorPicker(null))
            }
        }
        window.addEventListener('click', listener)
        return () => window.removeEventListener('click', listener)
    }, [])

    const onChangePickerHandler = (nextColor: ColorResult) => {
        batch(() => {
            dispatch(setColor(nextColor.hex))
            colorId && dispatch(updateColor(colorId))
        })
    }

    return (
        <div>
            <div ref={containerRef}
                 onClick={(e) => e.stopPropagation()}
            >
                <ChromePicker
                    color={color}
                    onChange={onChangePickerHandler}
                />
            </div>
        </div>
    );
};

export default ColorPicker;