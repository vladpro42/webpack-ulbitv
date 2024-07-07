import { jsx as _jsx } from "react/jsx-runtime";
import reactDom from 'react-dom/client';
import { App } from "./components/App";
var root = document.getElementById('root');
if (!root) {
    throw new Error('root not found');
}
var container = reactDom.createRoot(root);
container.render(_jsx(App, {}));
