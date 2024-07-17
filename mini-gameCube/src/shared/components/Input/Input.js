import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './Input.css';
import '../../Typography/Typography.css';
import clsx from 'clsx';
export const Input = ({ onChange, def, focus, disabled, error, placeholder, type, specificNumber, maxLength, value, }) => {
    const inputClasses = clsx('input', {
        default: def,
        focus: focus,
        disabled: disabled,
        error: error,
        font__inter: true,
        'font__16-regular': true,
        'specific__number-input': specificNumber,
    });
    return (_jsxs(_Fragment, { children: [_jsx("input", { maxLength: maxLength, disabled: disabled, type: type, className: inputClasses, onChange: onChange, placeholder: placeholder, value: value }), error ? _jsx("span", { className: "error__text", children: "Error" }) : null] }));
};
