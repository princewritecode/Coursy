import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCourse } from "../../utils/useCourse";
export const Courseinfo = () =>
{

    // const [courseInfo, setcourseinfo] = useState([]);
    const { courseid } = useParams();
    const courseInfo = useCourse(courseid);
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


