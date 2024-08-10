import { CourseCard } from "./CourseCard";
import { courseData } from "./courseData";

export function Body()
{
    return (
        <div className="body">
            <div className="search">
                <input type="search" placeholder="search course"></input>
            </div>
            <div className="container">
                {
                    courseData.unit.items.map((item) =>
                    {
                        return <CourseCard key={item.id} course={item}></CourseCard>;
                    })
                }
            </div>
        </div>);
}