export const RoadmapCard = (props) =>
{
    console.log(props.roadData);

    return props.roadData ? (
        <div className="w-[350px] h-[250px] m-4 p-4  bg-gray-300">
            <h1 className="text-4l font-bold">{props.roadData.id.toUpperCase()}</h1>
        </div>
    ) : <h1>Loading</h1>;
};