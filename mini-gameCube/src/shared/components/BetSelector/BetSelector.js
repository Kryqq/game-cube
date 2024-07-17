import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import clsx from 'clsx';
import './BetSelector.css';
import { useClickOutside } from '@hooks/useClickOutside';
import useGameStore from '@/shared/store/gameStore/gameStore';
export const BetSelector = () => {
    const [selectedValue, setSelectedValue] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    const ref = React.useRef(null);
    const options = ['1.00', '2.00', '3.00', '5.00', '10.00', '25.00', '60.00', '100.00'];
    const { setBetSize, setBetOption } = useGameStore();
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleChange = (value) => {
        setSelectedValue(value);
        setBetSize(value);
        setBetOption(value);
        setIsOpen(false);
    };
    useClickOutside(ref, () => {
        if (isOpen)
            setIsOpen(false);
    });
    return (_jsx("div", { className: "bet__selector", children: _jsxs("label", { className: "bet__selector_label", children: ["\u0420\u0430\u0437\u043C\u0435\u0440 \u0441\u0442\u0430\u0432\u043A\u0438", _jsxs("div", { className: "custom__select_container", onClick: handleToggle, children: [_jsxs("div", { ref: ref, className: "custom-select", children: [selectedValue ? selectedValue : '1.00', _jsx("span", { className: clsx('arrow', { up: isOpen, down: !isOpen }) })] }), isOpen && (_jsx("ul", { className: clsx('options', { show: isOpen }), children: options.map((value, index) => (_jsx("li", { onClick: () => handleChange(value), children: value }, index))) }))] })] }) }));
};
