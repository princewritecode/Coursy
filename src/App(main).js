import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { About } from "./components/About";
import { Error } from "./components/Error";
import { Courseinfo } from "./components/Courseinfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
import { Cart } from "./components/Cart.js";
import { Login } from "./components/Login.js";

const Roadmap = lazy(() => import('./components/Roadmap.js'));
function AppLayout()
{
    return (
        <>
            <Provider store={appStore}>
                <Header></Header>
                <Outlet></Outlet>
            </Provider>
        </>
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
                    element: <About user="prince" course="react"></About>
                },
                {
                    path: '/course/:courseid',
                    element: <Courseinfo></Courseinfo>
                },
                {
                    path: '/roadmap',
                    element: (
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <Roadmap></Roadmap>
                        </Suspense>
                    )
                },
                {
                    path: '/cart',
                    element: <Cart></Cart>
                }
            ], errorElement: <Error></Error>
        }
    ]
);
const rootElem = ReactDOM.createRoot(document.getElementById('root'));
rootElem.render(<RouterProvider router={appRouter}></RouterProvider>);





// import React, { Suspense, lazy } from "react";
// import ReactDOM from "react-dom/client";
// import { Header } from "./components/Header";
// import { Body } from "./components/Body";
// import { About } from "./components/About";
// import { Error } from "./components/Error";
// import { Courseinfo } from "./components/Courseinfo";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// const Roadmap = lazy(() => import('./components/Roadmap.js'));
// function AppLayout()
// {
//     return (
//         <>
//             <Header></Header>
//             <Outlet></Outlet>
//         </>
//     );
// }
// const appRouter = createBrowserRouter(
//     [
//         {
//             path: "/",
//             element: <AppLayout></AppLayout>,
//             children: [
//                 {
//                     path: '/',
//                     element: <Body></Body>
//                 },
//                 {
//                     path: '/about',
//                     element: <About user="prince" course="react"></About>
//                 },
//                 {
//                     path: '/course/:courseid',
//                     element: <Courseinfo></Courseinfo>
//                 },
//                 {
//                     path: '/roadmap',
//                     element: (
//                         <Suspense fallback={<h1>Loading...</h1>}>
//                             <Roadmap></Roadmap>
//                         </Suspense>
//                     )
//                 }
//             ], errorElement: <Error></Error>
//         }
//     ]
// );
// const rootElem = ReactDOM.createRoot(document.getElementById('root'));
// rootElem.render(<RouterProvider router={appRouter}></RouterProvider>);
