

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Card from "../card/card";
const Cards = ({eventHandler}) => {
    const [courses ,setCourses] =useState([])
        useEffect(() =>{
            fetch('cards.json')
            .then(res => res.json())
            .then(data =>setCourses(data))
        },[])

      
    return (
    <>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         {
            courses.map((course) => <Card key={course.id} course={course} eventHandler={()=>eventHandler(course)}></Card>)
         }
         </div>
         
        
    </>
    );
};

export default Cards;