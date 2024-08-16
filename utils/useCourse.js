//This is how custom hooks are made following single responsiblity principal
import { useState, useEffect } from "react";
export const useCourse = (courseid) =>
{
    const [courseInfo, setcourseinfo] = useState(null);
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
        const courseInfoData = await fetch(`https://corsproxy-la3g.onrender.com/full/?url=chttps://www.udemy.com/api-2.0/courses/${courseid}/?fields[course]=title,context_info,primary_category,primary_subcategory,avg_rating_recent,visible_instructors,locale,estimated_content_length,num_subscribers`);
        const dataJson = await courseInfoData.json();
        setcourseinfo(dataJson);
    };
    return courseInfo;
};
