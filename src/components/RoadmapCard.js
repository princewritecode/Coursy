
export const RoadmapCard = (props) =>
{

    return props.roadData ? (
        <div className=" w-[350px] h-[250px] m-4 p-4  bg-gray-300 border rounded-md">
            <h1 className="my-4 text-4l font-bold">{props.roadData.id.toUpperCase()}</h1>
            <p className="my-6" >{props.roadData.description}</p>
            <a href={`http://roadmap.sh` + props.roadData.url}> <button className="bg-gray-500 p-4 border rounded-md text-white hover:bg-black text-white">Let's go</button></a>
        </div>
    ) : <h1>Loading</h1>;
};