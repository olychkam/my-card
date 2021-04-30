import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import './App.css';
import Main from './n1-main/m2-ui/Main';
import {Routes} from "./n1-main/m2-ui/routes/Routes";
import {Login} from "./n2-features/f1-auth/a1-login/Login";
import {Register} from "./n2-features/f1-auth/a2-register/Register";

function App() {
    return (
        <div className="App">
            <Main/>
            <Route exact path={Routes.LOGIN} render={() => <Login/>}/>
            <Route exact path={Routes.REGISTER} render={() => <Register/>}/>

        </div>
    );
}

export default App;
