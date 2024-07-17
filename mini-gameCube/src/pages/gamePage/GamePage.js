import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from 'clsx';
import './GamePage.css';
import '@typography/Typography.css';
import useInterfaceStore from '@store/interfaceStore/interfaceStore';
import { GameInterface } from '@/widgets/GameInterface/GameInterface';
import { Header } from '@/widgets/Header/Header';
import { LogIn } from '@/widgets/LogIn/LogIn';
import { Cube } from '@/widgets/Cube/Cube';
import useGameStore from '@/shared/store/gameStore/gameStore';
export const GamePage = () => {
    const { loginWindowIsOpen, openLoginWindow, closeLoginWindow } = useInterfaceStore();
    const { face, result, betSize, initialBalance } = useGameStore();
    const setLoginHandler = () => {
        if (!loginWindowIsOpen) {
            openLoginWindow();
        }
        else {
            closeLoginWindow();
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: clsx('content', { blurred: loginWindowIsOpen }), children: [_jsx(Header, { setLogin: setLoginHandler }), _jsxs("div", { className: clsx('result', { result, 'font__20-bold': true }), children: [_jsxs("h2", { children: ["\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0431\u0440\u043E\u0441\u043A\u0430 \u043A\u0443\u0431\u0438\u043A\u0430: ", face, " "] }), result ? _jsxs("h3", { children: [" \u0412\u044B \u0432\u044B\u0438\u0433\u0440\u0430\u043B\u0438 ", Number(betSize) * 3] }) : _jsx("h3", { children: " \u041F\u043E\u0432\u0435\u0437\u0435\u0442 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0438\u0306 \u0440\u0430\u0437!" })] }), _jsx(Cube, {}), _jsx(GameInterface, {})] }), loginWindowIsOpen && _jsx(LogIn, {})] }));
};
