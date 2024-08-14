import { useState, useEffect } from "react";
export const useRoadmap = () =>
{
    console.log('inside roadmap hook');
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
        setRoadmap(dataJson);
    };
    return roadmap;
};