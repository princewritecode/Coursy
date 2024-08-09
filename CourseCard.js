import demoCourse from './Assets/enrolled-successfully-concept-flat-design-600nw-2002387010.webp';
export function CourseCard(props)
{
    const { avg_rating, id, image_480x270 } = props.course;
    return (
        <div className="card">
            <img src={image_480x270}></img>
            <h3>{avg_rating}</h3>
            <p>{id}</p>
        </div >
    );
}

