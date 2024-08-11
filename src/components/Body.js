import { CourseCard } from "./CourseCard";
import { courseData } from "../../utils/courseData";
import { useState, useEffect } from "react";

export function Body()
{
    const [course, setCourse] = useState([]);
    useEffect(() =>
    {
        fetchData();
    }, []);
    const fetchData = async () =>
    {
        const data = await fetch('https://www.udemy.com/api-2.0/discovery-units/?context=personalized_home&from=0&page_size=6&item_count=18&source_page=logged_out_homepage&locale=en_US&navigation_locale=en&skip_price=true');
        const awaitData = await data.json();
        setCourse(awaitData.units[0].items);
        console.log(course);
    };

    if (course.length === 0)
    {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="body">
            <div className="filter">
                <button onClick={() =>
                {
                    const filtercourse = course.filter((item) =>
                    {
                        return item.avg_rating.toFixed(1) > 4.6;
                    });
                    setCourse(filtercourse);
                }} className="filter-btn">Top Rated Course</button>
            </div>
            <div className="container">
                {
                    course.map((items) =>
                    {
                        return <CourseCard key={items.id} course={items}></CourseCard>;
                    })
                }
            </div>
        </div>);
}