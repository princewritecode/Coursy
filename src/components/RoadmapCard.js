export const RoadmapCard = (props) =>
{
    console.log(props);
    return props.roadData ? (
        <h1>{props.roadData.id}</h1>) : <h1>Loading</h1>;
};