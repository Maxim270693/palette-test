import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Palette from "./components/Palette/Palette";

function App() {

    return (
        <div className="App">
            <div className="container">
                <Header/>
                <Form/>
                <Palette/>
            </div>
        </div>
    );
}

export default App;
