import {useEffect, useState, useContext,  useRef} from 'react';
import {useNavigate,useLocation, Link} from "react-router-dom";
import {Loading} from "./App.jsx";
// import showNotification from './reminded.jsx';

function Header(){
    const [searchdisplay, setsearchdisplay] = useState(true);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 600px)').matches);
    const [istablet, setIstablet] = useState(window.matchMedia('(max-width: 837px)').matches);
    let {slide,setslide} =  useContext(Loading);

    let [remindlist,setremindlist] = useState(localStorage.getItem('list'))
    let [notificationlength,setnotificationlength] = useState(localStorage.getItem('notificationlength'));
    let [notificationView,setnotificationview] = useState(localStorage.getItem('notificationView'));
    
    const navigate = useNavigate();
    const searchvalue = useRef();
  let [filterdisplay,setfilterdisplay] = useState(false);


  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    const handleMediaChange = (mediaQuery) => setIsMobile(mediaQuery.matches);

    mediaQuery.addListener(handleMediaChange);

    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);
  useEffect(() => {
    const mediaQuerys = window.matchMedia('(max-width: 837px)');
    const handleMediaChange = (mediaQuery) => setIstablet(mediaQuery.matches);

    mediaQuerys.addListener(handleMediaChange);

    return () => {
      mediaQuerys.removeListener(handleMediaChange);
    };
  }, []);
    return (<div className="header">
        {!isMobile || searchdisplay?(<div className='w-[15.3%]  min-w-[189px] min-mobile:w-max min-tablet:min-w-max'><span  onClick={()=> {
          navigate('/')
        }} className='pl-[30%] min-mobile:pl-[12%]'>Short.link</span></div>):""}
    
      {/* <div className="headertools    justify-end"> */}
        {/* <ul className='flex gap-4'>
          <li >Home</li>
          <li>Contact</li>
          <li>About</li>
          
        </ul>
        <div className='mr-[4%]'>
          <Link to={'signup'} className='mr-4 bg-green-600 text-white py-2 px-3 rounded-full'>SignUp</Link>
          <Link to={'login'}>Login</Link>
        </div> */}
        
      {/* </div> */}
          {/* {!isMobile?(<div className="notification filter" onClick={()=>{
                setfilterdisplay(true)
              }}> <svg xmlns="http://www.w3.org/2000/svg" color="white" width="40" height="40" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg></div>):''}  */}
   {/* {isMobile?searchdisplay?(
        <div  onClick={()=>{
          navigate('/notification')
        }} className={`mobnotification`} ><svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
      </svg></div>):(<div className="mobnotification"><svg onClick={()=> {
setsearchdisplay(true)

    }} xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></div>):(
            <div onClick={()=>{
              navigate('/notification')
            }} className={`notification`}><svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
          </svg></div>)}
          {istablet?(<div className={isMobile?"mobnotification nav": "notification nav"} onClick={()=>{
            if(slide){
            setslide(false);
            }else{
            setslide(true);
            }
          }}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></div>):''} */}

  </div>);
}
export default Header;