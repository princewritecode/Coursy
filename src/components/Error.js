import { useRouteError } from "react-router-dom";
export const Error = () =>
{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>{err.error.message + ' ' + 'Status' + ' ' + err.status}</h1>
        </div>
    );
};