import Cards from "./components/coursesCards/cards";
import AddedCourse from "./components/chooseCourse/addedCourse";
import { useState } from "react";

import './App.css'

function App() {
  const [selectCourse ,setSelectCourse] =useState([])
  const eventHandler =(course) =>{
      const newSetvalue = [...selectCourse ,course]
      setSelectCourse(newSetvalue)
      console.log(course);
     }

  return (
    <>
        <h2 className="text-center text-4xl font-bold p-6">Course Registration</h2>

     <div className="flex flex-wrap md:flex-nowrap px-6 md:px-[50px] gap-8">
     <Cards eventHandler={eventHandler}></Cards>
     <div>
            <AddedCourse selectCourse={selectCourse}></AddedCourse>
      </div>
      </div>
    </>
  )
}

export default App
