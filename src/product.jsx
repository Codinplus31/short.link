import {useContext, useState} from 'react';
import {Loading} from "./App.jsx";
function Product() {
    let {width} = useContext(Loading);
    let [h,seth] = useState('calc(100% - 6rem)');
    let [display,setdisplay] = useState(false);


return (<div className={'rounded-t-[2rem] fixed bottom-[0px]  bg-white shadow-brands  gap-4 ' + (!display?'hidden':'flex')} style={{width: width+'px',height:h}}>
  <div className="absolute top-4 right-[4%] cursor-pointer"  onClick={()=>{
    setdisplay(false)
  }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg"  viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
</div>
  <div className="absolute  top-4 left-[4%] cursor-pointer" onClick={()=>{
  if(h  === 'calc(100% - 6rem)'){
    seth('100%')
  }else{
    seth('calc(100% - 6rem)')
  }
  }}><svg style={{transform
  :(h  === 'calc(100% - 6rem)')?"rotate(90deg)":"rotate(-90deg)",transition:'0.3s all'}} xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg></div>
  <div className='w-[70%] h-max flex gap-4 mt-[1.4rem]  items-center'>
  <div className='w-[14rem] h-[20rem] rounded-md flex items-center justify-center m-8' style={{boxShadow:"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}}>
<img src="PngItem_70690.png" className='h-full' alt="" />

  </div>
  <div className='ml-[1rem]'>
    <h1 className={' text-[180%] small-3:text-[140%]'}>Supper Skinny</h1>
    <p className={'text-black'}>Your Choices</p>
    <div className="flex items-center gap-1">
    <button className={"text-white bg-black h-[2.3rem] pl-[15px] pr-[15px] small-3:pl-[12px] small-3:pr-[12px]  rounded-md mt-3"}>$154</button>
    <button className={"text-white bg-white h-[2.3rem] pl-[15px] pr-[15px] small-3:pl-[12px] small-3:pr-[12px]  rounded-md mt-3 border border-red-600 flex  items-center justify-center"}><svg style={{width:'70%', height:'70%'}} xmlns="http://www.w3.org/2000/svg" width="24" color='red' height="24" fill="currentColor"  viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg></button>

    </div>
    </div>
  </div>

  <div className='border w-[29%] rounded-[2rem] mr-4 h-[16rem] mt-[3.4rem] flex items-center' style={{flexDirection:'column'}}>
  <div className="w-[85%] border mt-2 rounded-2xl h-9 bg-pink-100 flex items-center px-4 justify-between">
  <span>List</span>
  <div className="w-[2.4rem] flex gap-1">
  <button className="w-[45%] h-[90%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg></button>
  <button className="w-[45%] h-[90%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"  viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg></button>
  </div>
  </div>
  <div className="w-[85%] flex items-center justify-center border mt-2 rounded-2xl h-[60%] bg-pink-100 gap-2">
  <div className="w-[45%] bg-white h-[95%] rounded-xl overflow-hidden flex items-center justify-center">
<img src="PngItem_70690.png" className='h-full' alt="" />

    </div>
  <div className="w-[45%] bg-white h-[95%] rounded-xl overflow-hidden flex items-center justify-center">
<img src="PngItem_70690.png" className='h-full' alt="" />

    </div>

  </div>
  <button className="w-[85%] border mt-2 rounded-2xl h-9 bg-white">See All</button>

  </div>
</div>)
}
export default Product;