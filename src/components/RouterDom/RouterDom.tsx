import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from "../LoginPage/LoginPage";
import RegisteringPage from "../RegisteringPage/RegisteringPage";
import ResetPass from "../ResetPass/ResetPass";
import MainPage from "../MainPage/MainPage";

const RouterDom: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/*'} element={<MainPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/reg'} element={<RegisteringPage/>}/>
                <Route path={'/reset_pass'} element={<ResetPass/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RouterDom;