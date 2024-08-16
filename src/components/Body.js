import { CourseCard } from "./CourseCard";
import { courseData } from "../../utils/courseData";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../../utils/useOnlineStatus";
import { bestsellerCourse } from "./CourseCard";
export function Body()
{
    const [course, setCourse] = useState([]);
    const [searchText, setsearch] = useState("");
    const [origCourse, setOrigcourse] = useState([]);
    const BestsellerCourseCard = bestsellerCourse(CourseCard);
    useEffect(() =>
    {
        fetchData();
    }, []);
    const fetchData = async () =>
    {

        const data = await fetch('https://corsproxy-la3g.onrender.com/full/?url=https://www.udemy.com/api-2.0/discovery-units/?context=personalized_home&from=0&page_size=6&item_count=18&source_page=logged_out_homepage&locale=en_US&navigation_locale=en&skip_price=true');
        const awaitData = await data.json();
        setOrigcourse(awaitData.units[0].items);
        setCourse(awaitData.units[0].items);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
    {
        return (
            <h1>
                Check your internet connection
            </h1>
        );
    }
    return (
        course.length === 0 ? <Shimmer></Shimmer> : <div className="body">
            <div className="filter">
                <div className="m-4 p-4 ">
                    <input placeholder="Search Course" type="text" className="border rounded-md w-80 border-solid border-black" value={searchText} onChange={(e) =>
                    {
                        setsearch(e.target.value);
                    }}></input>
                    <button className="mx-4 px-4 py-1 bg-green-300 rounded-lg hover:bg-green-400" onClick={
                        () =>
                        {
                            //filter card and update the ui
                            const filteredCourse = origCourse.filter(
                                (elem) =>
                                {
                                    return elem.title.toLowerCase().includes(searchText.toLowerCase());
                                }
                            );
                            setCourse(filteredCourse);
                        }}>Search</button>
                    <button onClick={() =>
                    {
                        const filtercourse = course.filter((item) =>
                        {
                            return item.avg_rating.toFixed(1) > 4.6;
                        });
                        setCourse(filtercourse);
                    }} className="px-4 py-1 mx-4 bg-gray-200 rounded-lg hover:bg-gray-300">Top Rated Course</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center ">
                {
                    course.map((items) =>
                    {
                        return <Link key={items.id} to={'/course/' + items.id}>
                            {
                                items.bestseller_badge_content !== null ? <BestsellerCourseCard course={items}></BestsellerCourseCard> : <CourseCard course={items}></CourseCard>
                            }
                        </Link>;
                    })
                }
            </div>
        </div >
    );
}