import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCourse } from "../../utils/useCourse";

export const Courseinfo = () =>
{
    const { courseid } = useParams();
    const courseInfo = useCourse(courseid);
    // const [summary] = courseInfo.objectives_summary[0];
    console.log(courseInfo);
    return courseInfo && courseInfo.context_info && courseInfo.context_info.category ? (
        <div className="m-1 h-full bg-gray-500 course-card text-white rounded-lg shadow-md p-6 flex justify-start items-center">
            <img
                src={courseInfo.visible_instructors[0].image_100x100}
                alt="Course Instructor"
                className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex flex-col m-4 ">
                <h3 className="text-2xl font-bold mb-2 ">{courseInfo.context_info.category.title}</h3>
                <p className="text-gray-600 mb-4">{courseInfo.context_info.category.name}</p>
                <div className="flex flx-col justify-between items-center">
                    <ul className="flex flex-col  items-start">
                        <li className="font-medium m-2"><span className="font-bold">Instructor: </span>{courseInfo.visible_instructors[0].display_name}</li>
                    </ul>
                    {/* Consider adding enroll button or link based on your application logic */}
                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enroll Now</button> */}
                </div>
                <div>
                    <h2 className="text-white">{courseInfo.title}</h2>
                    <a href={`https://udemy.com` + courseInfo.primary_subcategory.url}>  <button className="p-4 m-4 text-white  bg-black  rounded-md  ">Check Course</button></a>
                </div>
            </div>
        </div>
    ) : (
        <h1 className="text-center">Loading...</h1>
    );
};