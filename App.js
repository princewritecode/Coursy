import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import { Body } from "./Body";
// const heading = <h1>Hello my name is prince</h1>;
// const heading2 = React.createElement('div',
//     { id: 'parent' },
//     React.createElement('div', { id: 'child' },
//         [
//             React.createElement('h1', {}, "hello from heading 1"),
//             React.createElement('h2', {}, "hello from heading 2")
//         ]
//     )
// );
// const Heading3 = () =>
// {
//     return (
//         <>
//             {heading}
//             <h2>Working on things
//                 that matter</h2>
//             <h3>not what you are looking</h3>
//         </>
//     );
// };
// const rootElem = ReactDOM.createRoot(document.getElementById('root'));
// const rootElem2 = ReactDOM.createRoot(document.getElementById('root2'));
// rootElem.render(<Heading3></Heading3>);
// rootElem2.render(heading2);

// creating header using fn component in episode-3
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

