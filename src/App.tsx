import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Palette from "./components/Palette/Palette";
import {Routes, Route} from 'react-router-dom';

function App() {

    return (
        <div className="App">
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
