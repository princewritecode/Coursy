import { Link } from 'react-router-dom';

export function CourseCard(props)
{
    const { avg_rating, id, url, image_480x270, headline, published_title } = props.course;
    return (
        <div className="card">
            <img src={image_480x270}></img>
            <h3>Rating {avg_rating.toFixed(1) + ' ⭐️'}</h3>
            <p><span className='title'>Title</span>  - {published_title.toUpperCase()}</p>
            <p className="info-headline"><span className="title">Course Information - </span>{headline}</p>
        </div>
    );
}
