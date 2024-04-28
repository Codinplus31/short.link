import { useState, useContext} from "react";
import {Loading} from "./App.jsx";
import {useNavigate, useLocation} from  'react-router-dom';

function Slide() {
    let {istablet,slide} =  useContext(Loading);
  let location = useLocation();
  let navigate = useNavigate()
return (<>
<ul>
  <li className={`${location.pathname === '/'?'bg-[#096AE1] text-white ':''} flex items-center  gap-2 pl-3 text-[90%] rounded-2xl active:bg-[#096AE1] active:text-white h-[2.4rem]`} onClick={()=> {
    navigate('/')
  }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z"/>
</svg>Dashboard</li>
  <li className={`${location.pathname === '/trending'?'bg-[#096AE1] text-white':''} flex items-center text-[90%] rounded-2xl gap-2 pl-3 active:bg-[#096AE1] active:text-white h-[2.4rem]`} onClick={()=> {
    navigate('trending')
  }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
</svg> Email marketing</li>
  {/* <li className={`${location.pathname === '/search'?'bg-[#096AE1] text-white ':''} flex items-center text-[90%] rounded-2xl gap-2 pl-3 active:bg-[#096AE1] active:text-white h-[2.4rem]`} onClick={()=> {
    navigate('search')
  }}><svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg> Search</li> */}
  <li className={`${location.pathname === '/list'?'bg-[#096AE1] text-white ':''}flex items-center gap-2 pl-3 text-[90%] rounded-2xl active:bg-[#096AE1] active:text-white h-[2.4rem]` } onClick={()=> {
    navigate('list')
  }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg> Deliveried items</li>
</ul>

</>)
}
export default Slide;