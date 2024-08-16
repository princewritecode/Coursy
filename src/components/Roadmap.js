import { RoadmapCard } from "./RoadmapCard";
import { useRoadmap } from "../../utils/useRoadmap";
const Roadmap = () =>
{
    const roadmap = useRoadmap();

    console.log(roadmap);
    return roadmap.length !== 0 ? (
        <div className='flex flex-wrap items-center justify-center gap-4 just m-4 p-4'>
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