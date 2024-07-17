import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import './LogIn.css';
import { Button } from '@components/Button/Button';
import { Input } from '@components/Input/Input';
import { XCross } from '@components/SvgComponents/xCross/XCross';
import useInterfaceStore from '@store/interfaceStore/interfaceStore';
import { fetchLogin } from '@api/requests/requests';
export const LogIn = () => {
    const { loginWindowIsOpen, openLoginWindow, closeLoginWindow } = useInterfaceStore();
    const [loginValue, setLoginValue] = React.useState('');
    const [passwordValue, setpasswordValue] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [logindError, setLoginError] = React.useState(false);
    const setLoginHandler = () => {
        if (!loginWindowIsOpen) {
            openLoginWindow();
        }
        else {
            closeLoginWindow();
        }
    };
    const handleLoginValue = (event) => {
        setLoginValue(event.target.value);
    };
    const handlePasswordValue = (event) => {
        setpasswordValue(event.target.value);
    };
    const handleSubmitLogin = () => {
        if (loginValue.trim() === '') {
            setLoginError(true);
        }
        else {
            setLoginError(false);
        }
        if (passwordValue.trim() === '') {
            setPasswordError(true);
        }
        else {
            setPasswordError(false);
        }
        fetchLogin
            .userLogin('test_player_try', 'test_player_try')
            .then((res) => {
            console.log('ccc');
            console.log(res);
        })
            .catch((err) => {
            console.log('asd');
            console.log(err);
        });
    };
    return (_jsxs("div", { className: "logIn", children: [_jsx(XCross, { onClick: setLoginHandler }), _jsxs("div", { className: "logIn__inputs", children: [_jsx(Input, { error: logindError, value: loginValue, onChange: handleLoginValue, placeholder: "Login" }), _jsx(Input, { error: passwordError, maxLength: 16, value: passwordValue, onChange: handlePasswordValue, placeholder: "Password", type: "password" })] }), _jsx(Button, { specificNumber: true, onClick: handleSubmitLogin, children: "\u0412\u043E\u0439\u0442\u0438" })] }));
};
