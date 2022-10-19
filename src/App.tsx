import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

function App() {

    return (
        <div className="App">
            <div className="container">
                <Header/>
                <Form/>
            </div>
        </div>
    );
}

export default App;
