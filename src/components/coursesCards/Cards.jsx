

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Card from "../card/card";
import AddedCourse from "../chooseCourse/addedCourse";
const Cards = () => {
    const [courses ,setCourses] =useState([])
        useEffect(() =>{
            fetch('cards.json')
            .then(res => res.json())
            .then(data =>setCourses(data))
        },[])
    return (
    <>
        <div className="flex flex-wrap md:flex-nowrap px-6 md:px-[50px] gap-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         {
            courses.map((course) => <Card key={course.id} course={course}></Card>)
         }
         </div>
         <div>
            <AddedCourse></AddedCourse>
         </div>
        </div>
    </>
    );
};

export default Cards;