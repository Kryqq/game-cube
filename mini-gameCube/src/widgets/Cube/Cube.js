import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './Cube.css';
import clsx from 'clsx';
import { Points } from '@components/SvgComponents/Points/Points';
import useGameStore from '@store/gameStore/gameStore';
export const Cube = () => {
    const { roll, face } = useGameStore();
    return (_jsx(_Fragment, { children: _jsx("div", { className: "cube__container", children: roll ? (_jsx(_Fragment, { children: _jsxs("div", { className: clsx('cube', `show-${face}`, { roll }), children: [_jsx("div", { className: "face face__front", children: [1].map((point) => (_jsx(Points, {}, point))) }), _jsx("div", { className: "face face__back", children: _jsx("div", { className: "points-container", children: [1, 2].map((point) => (_jsx(Points, {}, point))) }) }), _jsx("div", { className: "face face__left", children: _jsx("div", { className: "points-container", children: [1, 2, 3].map((point) => (_jsx(Points, {}, point))) }) }), _jsx("div", { className: "face face__right", children: _jsx("div", { className: "points-container", children: [1, 2, 3, 4].map((point) => (_jsx(Points, {}, point))) }) }), _jsx("div", { className: "face face__top", children: _jsx("div", { className: "points-container", children: [1, 2, 3, 4, 5].map((point) => (_jsx(Points, {}, point))) }) }), _jsx("div", { className: "face face__bottom", children: _jsx("div", { className: "points-container", children: [1, 2, 3, 4, 5, 6].map((point) => (_jsx(Points, {}, point))) }) })] }) })) : (_jsx("div", { className: "face face__front", children: _jsx("div", { className: "points-container", children: [...Array(face)].map((_, index) => (_jsx(Points, {}, index))) }) })) }) }));
};
