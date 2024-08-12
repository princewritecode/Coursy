import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { About } from "./components/About";
import { Error } from "./components/Error";
import { Courseinfo } from "./components/Courseinfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
function AppLayout()
{
    return (
        <div className="app">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
}
const appRouter = createBrowserRouter(
    [
        {

            path: "/",
            element: <AppLayout></AppLayout>,
            children: [
                {
                    path: '/',
                    element: <Body></Body>
                },
                {
                    path: '/about',
                    element: <About></About>
                },
                {
                    path: '/course/:courseid',
                    element: <Courseinfo></Courseinfo>
                }
            ], errorElement: <Error></Error>
        }
    ]
);
const rootElem = ReactDOM.createRoot(document.getElementById('root'));
rootElem.render(<RouterProvider router={appRouter}></RouterProvider>);

