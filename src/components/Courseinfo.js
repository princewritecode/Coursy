import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const Courseinfo = () =>
{

    const [courseInfo, setcourseinfo] = useState([]);
    const { courseid } = useParams();

    useEffect(() =>
    {
        console.log('useeffect run');
        try
        {
            fetchCourseInfo();
        }
        catch (error)
        {
            console.log(error);
        }
    }, []);
    const fetchCourseInfo = async () =>
    {
        const courseInfoData = await fetch(`https://www.udemy.com/api-2.0/courses/${courseid}/?fields[course]=title,context_info,primary_category,primary_subcategory,avg_rating_recent,visible_instructors,locale,estimated_content_length,num_subscribers`);
        const dataJson = await courseInfoData.json();
        setcourseinfo(dataJson);
    };
    console.log(courseInfo);
    return courseInfo && courseInfo.context_info && courseInfo.context_info.category ? (
        <div className="course">
            <img src={courseInfo.visible_instructors[0].image_100x100
            }></img>
            <h1>{courseInfo.context_info.category.title}</h1>
            <ul>
                <li>{courseInfo.context_info.category.id}</li>
                <li>{ }</li>
            </ul>
        </div>
    ) : <h1>Loading...</h1>;
};


