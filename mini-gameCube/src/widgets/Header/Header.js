import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@components/Button/Button';
import './Header.css';
export const Header = ({ setLogin }) => {
    return (_jsxs("header", { className: "header", children: [_jsx("span", { children: "Test Game" }), _jsxs("div", { className: "header__buttons", children: [_jsx(Button, { onClick: setLogin, children: "\u0412\u0445\u043E\u0434" }), _jsx(Button, { onClick: () => { }, children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" })] })] }));
};
