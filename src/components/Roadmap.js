import { useEffect, useState } from "react";
export const Roadmap = () =>
{
    const [roadmap, setRoadmap] = useState([]);
    useEffect(() =>
    {
        try
        {
            fetchRoadmap();
        }
        catch (err)
        {
            console.log(err);
        }
    }, []);
    const fetchRoadmap = async () =>
    {
        const data = await fetch('https://roadmap.sh/pages.json');
        const dataJson = await data.json();
        console.log(dataJson);
    };
    return (<>
        <h1>Welcome to roadmap</h1>
    </>);
};

