import demoCourse from './Assets/enrolled-successfully-concept-flat-design-600nw-2002387010.webp';
export function CourseCard(props)
{
    console.log(props);
    return (
        <div className="card">
            <img src={demoCourse}></img>
            <h3>{props.name}</h3>
            <h4>{props.course}</h4>
        </div >
    );
}