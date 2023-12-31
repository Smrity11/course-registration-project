/* eslint-disable react/no-unknown-property */
import Cards from "./components/coursesCards/cards";
import AddedCourse from "./components/chooseCourse/addedCourse";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css'

function App() {
  const [selectCourse, setSelectCourse] = useState([]);
  const [totalCredit ,setTotalcredit] =useState(0)
  const [totalRemaining ,setTotalRemaining] = useState(20)
  const [totalPrice,setTotalPrice] =useState(0)

const eventHandler = (course) => {
  const isExist = selectCourse.find((item) => item.id === course.id);
  let count= course.credit
  let price =course.price
  if (isExist) {
    toast.error('This Course is already selected.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  } else {
    selectCourse.forEach( item =>{
      count += item.credit
      price += item.price
    })
    const totalRemainig =20 - count
    if(count > 20){
     toast.error('You have no credit.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    }
    else{
      setTotalcredit(count)
      setTotalRemaining(totalRemainig)
      setTotalPrice(price)
      const newSetValue = [...selectCourse, course];
      setSelectCourse(newSetValue);
    }
   
  }
};

  return (
    <>
        <h2 className="text-center text-4xl font-bold p-6">Course Registration</h2>
      <ToastContainer />
     <div className="flex flex-wrap md:flex-nowrap px-6 md:px-[50px] gap-8">
     <Cards eventHandler={eventHandler}></Cards>
     <div>
            <AddedCourse totalPrice={totalPrice} totalRemaining={totalRemaining} totalCredit={totalCredit} selectCourse={selectCourse}></AddedCourse>
      </div>
      </div>
    </>
  )
}

export default App
