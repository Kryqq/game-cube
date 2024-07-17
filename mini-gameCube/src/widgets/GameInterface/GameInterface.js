import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BetSelector } from '@components/BetSelector/BetSelector';
import { Button } from '@components/Button/Button';
import './GameInterface.css';
import useGameStore from '@store/gameStore/gameStore';
import { Input } from '@components/Input/Input';
import React from 'react';
export const GameInterface = () => {
    const [value, setValue] = React.useState('1');
    const betOptions = {
        even: 'even',
        odd: 'odd',
        oneThree: '1to3',
        fourSix: '4to6',
        specificNumber: 'specificNumber',
    };
    const { addPointsToBalance, subtractPointsFromBalance, setFace, setRoll, setBetOption, roll, betSize, betOption, setReult, } = useGameStore();
    const defineGameResults = (betOption, face, betSize) => {
        if (betOption === betOptions.even && face % 2 === 0) {
            addPointsToBalance(betSize * 2);
            setReult('win');
        }
        else if (betOption === betOptions.odd && face % 2 !== 0) {
            addPointsToBalance(betSize * 2);
            setReult('win');
        }
        else if (betOption === betOptions.oneThree && face >= 1 && face <= 3) {
            addPointsToBalance(betSize * 2);
            setReult('win');
        }
        else if (betOption === betOptions.fourSix && face >= 4 && face <= 6) {
            addPointsToBalance(betSize * 2);
            setReult('win');
        }
        else if (betOption === betOptions.specificNumber && face === Number(value)) {
            addPointsToBalance(betSize * 3);
            setReult('win');
        }
        else {
            subtractPointsFromBalance(betSize);
            setReult('lose');
        }
    };
    const rollDice = () => {
        if (!roll) {
            setRoll(true);
            setTimeout(() => {
                const newFace = Math.floor(Math.random() * 2) + 1;
                setFace(newFace);
                setRoll(false);
                defineGameResults(betOption, newFace, Number(betSize));
            }, 2000);
        }
    };
    const handleBetSelection = (betType) => () => {
        setBetOption(betType);
    };
    const handleIputValueChange = (event) => {
        const value = event.target.value;
        const regex = /^[1-6]$/;
        if (regex.test(value)) {
            setValue(value);
        }
        else {
            setValue('');
        }
    };
    return (_jsxs("div", { className: "game__interface", children: [_jsx(BetSelector, {}), _jsx("span", { className: "bet__variants", children: "\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0441\u0442\u0430\u0432\u043E\u043A" }), _jsxs("div", { className: "button__grid_containter", children: [_jsx(Button, { disabled: roll, onClick: handleBetSelection(betOptions.even), evenOdd: true, children: "\u0427\u0435\u0442\u043D\u043E\u0435" }), _jsx(Button, { disabled: roll, onClick: handleBetSelection(betOptions.odd), evenOdd: true, children: "\u041D\u0435\u0447\u0435\u0442\u043D\u043E\u0435" }), _jsx(Button, { disabled: roll, onClick: handleBetSelection(betOptions.oneThree), evenOdd: true, children: "\u041E\u0442 1 \u0434\u043E 3" }), _jsx(Button, { disabled: roll, onClick: handleBetSelection(betOptions.fourSix), evenOdd: true, children: "\u041E\u0442 4 \u0434\u043E 6" })] }), _jsxs("div", { className: "footer__buttons", children: [_jsxs(Button, { disabled: roll, onClick: handleBetSelection(betOptions.specificNumber), children: [_jsx("span", { children: " \u041A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E" }), _jsx(Input, { maxLength: 1, onChange: (e) => handleIputValueChange(e), specificNumber: true, value: value })] }), _jsx(Button, { onClick: rollDice, bet: true, children: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443" })] })] }));
};
