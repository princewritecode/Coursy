import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
function AppLayout()
{
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    );
}
const rootElem = ReactDOM.createRoot(document.getElementById('root'));
rootElem.render(<AppLayout></AppLayout>);

