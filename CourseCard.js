export function CourseCard(props)
{
    console.log(props);
    const { avg_rating, id, image_480x270, headline } = props.course;
    return (
        <div className="card">
            <img src={image_480x270}></img>
            <h3>{avg_rating}</h3>
            <p>{id}</p>
            <p>{headline}</p>
        </div >
    );
}

