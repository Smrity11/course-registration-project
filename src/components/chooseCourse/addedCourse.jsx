/* eslint-disable react/no-unknown-property */


const AddedCourse = ({selectCourse,totalCredit,totalRemaining,totalPrice}) => {

    return (
        <>
        <div >
       
           <div class="card bg-base-100 shadow-xl p-8 lg:w-[280px]">
            <h4 className="text-[16px] text-sky-500 my-3 font-bold">Credit Hour Remaining {totalRemaining} hr</h4>
            <hr></hr>
            <p className="text-black text-2xl my-3">Course Name</p>
            {
                selectCourse.map(item => <li  key={item.id}>{item.title}
                 </li>) 
            }
            <hr></hr>
            <p className="text-slate-500 my-3">Total Credit Hour : {totalCredit}</p>
            <hr></hr>
            <p className="my-3">Total Price : {totalPrice} USD</p>
           </div>
        </div>
        </>
    );
};

export default AddedCourse;