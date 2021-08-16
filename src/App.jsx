import React from "react";
import './App.css';
import Header from "./components/Header";
import {HashRouter} from "react-router-dom";
import Routes from "./components/Routes";
import Footer from "./components/Footer";
import Main from "./components/slide/Main";
import Crumbs from "./components/slideTwo/Сrumbs";

function App() {
    return (
        <div className="App">
            <Header/>
            <HashRouter>
                <Routes/>
                {/*<Crumbs/>*/}
                <Main/>
            </HashRouter>
            <Footer/>
        </div>
    );
}

export default App;
