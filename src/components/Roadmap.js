import { useEffect, useState } from "react";
import { RoadmapCard } from "./RoadmapCard";
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
        setRoadmap(dataJson);
    };
    return roadmap.length !== 0 ? (
        <div>
            {
                roadmap.map(
                    (roadmap) =>
                    {
                        return (<RoadmapCard roadData={roadmap}></RoadmapCard>);
                    })
            }
        </div>
    ) : <h1>Loading...</h1>;
};

