import React from "react";
function Dashboard(){

    return (<div className='w-[100%]'>
        <div className="w-[100%] h-[9rem]  flex gap-1 justify-center items-center ">
            <div className="h-[90%] flex justify-center items-center  max-w-[14rem] flex-col rounded-md bg-gray-100 w-[33%]">
                
                <h4 className="text-[0.9rem] text-red-400">Profit Price</h4>
                
                <h1 className="text-[2rem] text-red-400">$1000</h1>
            </div>
            <div className="h-[90%] flex justify-center items-center  max-w-[14rem] flex-col rounded-md bg-gray-100 w-[33%]">
            <h4 className="text-[0.9rem] text-blue-400">Real Price</h4>
                
                <h1 className="text-[2rem] text-blue-400">$1000</h1>
            </div>
            <div className="h-[90%] flex justify-center items-center  max-w-[14rem] flex-col rounded-md bg-gray-100 w-[33%]">
            <h4 className="text-[0.9rem] text-green-400">Total Price</h4>
                
                <h1 className="text-[2rem] text-green-400">$1000</h1>
            </div>
        </div>
        <div className="w-[100%]">
            <h1 className="text-[2rem] ml-[4.5%]">Orders</h1>
            <div className="w-[100%]">
                <div className="ml-[4.5%] flex items-center mb-3 w-[90%] h-[8rem] rounded-md  bg-gray-200">
                    <img src="65.jpg" className="w-[5.8rem] rounded h-[85%] ml-2" alt="" />
                    <h1 className="ml-3 mr-3 text-[1.2rem] ">
                        <span className="text-[1.2rem] listcount">title </span>
                        
                        <span className="text-[0.9rem]">$100</span>
                        </h1>
                    <span className="ml-[auto] mr-3 text-yellow-400">  Not Deliveried</span>
                </div>
            </div>
        </div>
    </div>);
}
export default Dashboard;