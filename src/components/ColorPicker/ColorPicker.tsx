import React from 'react';
import {ChromePicker} from 'react-color';
import {useAppSelector} from "../../types/types";
import {useDispatch} from "react-redux";
import {setColor} from "../../bll/actions/actions";


const ColorPicker = () => {
    const dispatch = useDispatch();

    const color = useAppSelector<any>(state => state.reducer.color);

    return (
        <div>
            <div style={{position: 'absolute', zIndex: '2', top: '270px'}}
                 onClick={(e) => e.stopPropagation()}
            >
                <ChromePicker
                    color={color}
                    onChange={(updateColor) => dispatch(setColor(updateColor))}

                />
            </div>
        </div>
    );
};

export default ColorPicker;