import { CourseCard } from "./CourseCard";
export function Body()
{
    return (
        <div className="body">
            <div className="search">
                <input type="search" placeholder="search course"></input>
            </div>
            <div className="container">
                <CourseCard name="Angela yu" course="webo"></CourseCard>
                <CourseCard name="Angela kyu" course="web dev"></CourseCard>

            </div>
        </div>);
}