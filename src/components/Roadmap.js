import { RoadmapCard } from "./RoadmapCard";
import { useRoadmap } from "../../utils/useRoadmap";
const Roadmap = () =>
{
    const roadmap = useRoadmap();
    return roadmap.length !== 0 ? (
        <div>
            {console.log('inside roadmap')}
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

export default Roadmap;