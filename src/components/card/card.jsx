/* eslint-disable react/no-unknown-property */


const Card = ({course,eventHandler}) => {
    const {title,description,image,credit,price,logo_img} = course
 
   
    return (
        <div >
            <div class="card bg-base-100 shadow-xl">
  <figure class=" pt-4">
    <img src={image} alt="Shoes" class="rounded-xl max-w-[275px]" />
  </figure>
  <div class="px-6">
    <h2 class="text-[19px] card-title max-w-[300px] mt-2">{title}</h2>
    <p className="w-auto md:max-w-[260px] text-sm text-slate-600 mt-3">{description}</p>
    <div className="flex justify-between items-center mt-3">
    <p className="text-2xl text-">$</p>
      <p>Price : {price}</p>
      <img src={logo_img}></img>
      <p>Credit : {credit}hr</p>
    </div>
    <div class="card-actions my-3 ">
      <button onClick={() =>eventHandler(course)} class="w-full py-[4px] text-white bg-blue-500 text-lg font-bold">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;