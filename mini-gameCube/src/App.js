import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import { GamePage } from '@pages/gamePage/GamePage';
function App() {
    // input disabled
    return (_jsx("div", { className: "App", children: _jsx(GamePage, {}) }));
}
export default App;
