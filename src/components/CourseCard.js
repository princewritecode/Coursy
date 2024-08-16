import { CourseCard } from "./CourseCard";
import { courseData } from "../../utils/courseData";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../../utils/useOnlineStatus";
export function CourseCard(props)
{
    const { avg_rating, id, url, image_480x270, headline, published_title } = props.course;
    return (
        <>
            <div className="flex flex-col justify-center p-4 m-4 w-[250px] bg-gray-100 border rounded-md h-[500px] hover:bg-slate-200">
                <img src={image_480x270} className='border rounded-md '></img>
                <h3 className='font-bold py-4 text-lg m-2'>Rating {avg_rating.toFixed(1) + ' ⭐️'}</h3>
                <p className='font-bold '><span className='font-bold'>Title</span>  - {published_title.toUpperCase()}</p>
                <p className="info-headline my-2"><span className="title">Course Information - </span>{headline}</p>
            </div>

        </>
    );
}
// Higher order component input- courseCard -> coursecard bestseller
export const bestsellerCourse = () =>
{
    return (props) =>
    {
        return (
            <div>
                <label className="absolute bg-green-300 text-black border rounded-md px-2">Bestseller</label>
                <CourseCard {...props}></CourseCard>
            </div>
        );
    };
};