import { CourseCard } from "./CourseCard";
import { courseData } from "../../utils/courseData";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
export function Body()
{
    const [course, setCourse] = useState([]);
    const [searchText, setsearch] = useState("");
    const [origCourse, setOrigcourse] = useState([]);
    useEffect(() =>
    {
        fetchData();
    }, []);
    const fetchData = async () =>
    {
        const data = await fetch('https://www.udemy.com/api-2.0/discovery-units/?context=personalized_home&from=0&page_size=6&item_count=18&source_page=logged_out_homepage&locale=en_US&navigation_locale=en&skip_price=true');
        const awaitData = await data.json();
        setOrigcourse(awaitData.units[0].items);
        setCourse(awaitData.units[0].items);
    };
    return (
        course.length === 0 ? <Shimmer></Shimmer> : <div className="body">
            <div className="filter">
                <div className="search">
                    <input placeholder="Search Course" type="text" className="search-box" value={searchText} onChange={(e) =>
                    {
                        setsearch(e.target.value);
                    }}></input>
                    <button className="search-btn" onClick={
                        () =>
                        {
                            //filter card and update the ui
                            const filteredCourse = origCourse.filter(
                                (elem) =>
                                {
                                    return elem.title.toLowerCase().includes(searchText.toLowerCase());
                                }
                            );
                            console.log(filteredCourse);
                            setCourse(filteredCourse);
                        }}>Search</button>
                </div>
                <button onClick={() =>
                {
                    console.log('clicked');
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
                        return <Link key={items.id} to={'/course/' + items.id}><CourseCard course={items}></CourseCard></Link>;
                    })
                }
            </div>
        </div >
    );
}