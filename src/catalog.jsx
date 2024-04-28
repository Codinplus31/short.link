import React from "react";
import './index.css'
function Catalog(){


  let data = ['product-4.jpg','product-10.jpg', '1655729031_diamondneck.jpg','1655749703_goldpiercing.jpg','1655750563_minniependants.jpg']
 return (<div className="catalog pl-1  pr-1">
  {data && data.map((e,i)=>(

    <div className="cataitem shadow-md h-max rounded-[1.5rem] overflow-hidden" key={i}>
    <img className='img' src={e} alt="" />
            <div className='catalist'>
              <div className="bg-white h-[2rem] w-[2rem] flex items-center justify-center rounded-xl cursor-pointer">
            <img className="shadow-xl h-[50%] w-[50%]" src="./love.svg"  alt="" />

              </div>
 
            </div>
            <div className="w-[100%] flex items-center gap-[20%]  justify-between bg-gray-100 pl-[6%] pr-[5%] ">

            <span className="mb-[1rem]">
              <p  className="text-[80%] text-gray-400">Our choice</p>
              <p  className="font-bold">WMX Rubber Zebber sandel</p>
            </span>
            <button className="bg-[#096AE1] hover:bg-blue-600 text-white p-[.40rem] rounded-[20px] pl-[15px] pr-[15px] text-[90%] ">$105</button>
            </div>
    </div>
  ))}
    
 </div>);
}
export default Catalog;