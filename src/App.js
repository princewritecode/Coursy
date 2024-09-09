import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactDOM from 'react-dom/client';
const Todos = () =>
{

    try
    {
        const [list, setList] = useState();
        useEffect(async () =>
        {
            const response = fetch("https://dummyjson.com/todos");
            response
                .then((value) =>
                {
                    const data = value.json();
                    return data;
                })
                .then((data) =>
                {
                    setList(data.todos);
                });
        }, []);
        console.log(list);
        return (
            <>
                <ul>
                    {list.map((elem) =>
                    {
                        return <li>{elem.todo}</li>;
                    }
                    )
                    }
                </ul>
            </>
        );
    }
    catch (error)
    {
        console.log(error);
    }
}
    ;
const rootElem = ReactDOM.createRoot(document.getElementById('root'));
rootElem.render(<Todos></Todos>);
