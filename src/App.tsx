import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Palette from "./components/Palette/Palette";
import {Routes, Route} from 'react-router-dom';
import {getColorPicker} from "./bll/actions/actions";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();

    return (
        <div className="App" onClick={() => dispatch(getColorPicker(false))}>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/" element={<Form/>}/>
                    <Route path="/palette" element={<Palette/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
