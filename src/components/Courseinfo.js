import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCourse } from "../../utils/useCourse";
export const Courseinfo = () =>
{
    // const [courseInfo, setcourseinfo] = useState([]);
    const { courseid } = useParams();
    const courseInfo = useCourse(courseid);
    console.log(courseInfo);
    console.log(courseInfo);
    return courseInfo && courseInfo.context_info && courseInfo.context_info.category ? (
        <div className="my-10 w-[350px] bg-gray-100 h-[350px] flex flex-col items-center mx-auto border rounded-lg">
            <img src={courseInfo.visible_instructors[0].image_100x100
            } className="w-[150px] h-[150px] my-4 border rounded-md"></img>
            <h1 className="font-bold">category:  {courseInfo.context_info.category.title}</h1>
            <ul className="flex flex-col items-center">
                <li>{courseInfo.context_info.category.name}</li>
                <li className="font-medium m-4"><span className="font-bold">Instructor: </span>{courseInfo.visible_instructors[0].display_name}</li>
                <li><span className="font-bold">Enrolled Students:</span>{courseInfo.num_subscribers}</li>
            </ul>
        </div>
    ) : <h1>Loading...</h1>;
};


