import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import './Button.css';
import '@typography/Typography.css';
export const Button = ({ children, evenOdd, specificNumber, bet, disabled, onClick }) => {
    const buttonClasses = clsx('button', {
        even__odd: evenOdd,
        'specific__number  ': specificNumber,
        bet: bet,
        'font-inter': true,
        'font-16-regular': true,
        disabled__button: disabled,
    });
    const handleClick = () => {
        onClick();
    };
    return (_jsx("button", { onClick: handleClick, disabled: disabled, className: buttonClasses, children: children }));
};
