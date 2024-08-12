import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const Courseinfo = () =>
{

    const [courseInfo, setcourseinfo] = useState([]);
    const { courseid } = useParams();
    console.log(courseid);
    useEffect(() =>
    {
        fetchCourseInfo();
    }, []);

    const fetchCourseInfo = async () =>
    {
        const courseInfoData = await fetch(`https://www.udemy.com/api-2.0/courses/${courseid}/?fields[course]=title,context_info,primary_category,primary_subcategory,avg_rating_recent,visible_instructors,locale,estimated_content_length,num_subscribers`);
        const dataJson = await courseInfoData.json();
        console.log(dataJson);
        setcourseinfo(dataJson);
    };
    return (
        <div className="course">
            <h1>{courseInfo.title}</h1>
            <ul>
                <li>course info</li>
                <li>course abouts</li>
            </ul>
        </div>
    );
};