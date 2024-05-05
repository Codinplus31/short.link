import React,{useState, useEffect, useRef} from 'react';
import {useNavigate, useLocation} from  'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import Header from './header1.jsx';
import Content from './content.jsx';
import Dashboard from './dashboard.jsx';
import Lands from './landingpage.jsx';
import Slide from './slide.jsx';

import Product from './product.jsx';
import Footer from './footer.jsx';
import Login from './login.jsx';
import Signup from './signup.jsx';
export const Loading = React.createContext();
 
function App() {
  let [slide,setslide] = useState(false);
  let [isLoggedin,setLogin] = useState(localStorage.getItem('shorlink_user') !== null?true:false );
  let [id,setid] = useState(localStorage.getItem('shorlink_user'));
  let [isLoading,setLoading] = useState(false);
  let [error,seterror] = useState(null);
  let [data,setdata] = useState(null);
  let [width, setwidth] = useState();
  let navigate = useNavigate();
  let location = useLocation();
  let container = useRef();
  // console.log(location)
  const [istablet, setIstablet] = useState(window.matchMedia('(max-width: 837px)').matches);
  useEffect(() => {
    const mediaQuerys = window.matchMedia('(max-width: 837px)');
    const handleMediaChange = (mediaQuery) => setIstablet(mediaQuery.matches);

    mediaQuerys.addListener(handleMediaChange);

    return () => {
      mediaQuerys.removeListener(handleMediaChange);
    };
  }, []);
  useEffect(()=>{
    setwidth(container.current.getClientRects()[0].width)
    window.onresize = ()=>{
      setwidth(container.current.getClientRects()[0].width)
    }
  }, [container])
  return (
    <>
    <Loading.Provider value={{slide,setslide,width, istablet,isLoggedin,setLogin,id,setid}}>
    <Header /> 

    <div className="main">
    {/* <div className="slidenav tablet1:w-[40%]     min-tablet:fixed min-tablet:right-[0%] min-tablet:bg-white overflow-y-scroll min-tablet:h-[90%] tablet1:h-[100%] navanimate min-tablet:top-[3.2rem]" style={istablet ?slide?{display:'block',minWidth:'190px', zIndex:'999',opacity: '1',}:{display:'block',minWidth:'0%',width:'0%',zIndex:'999',opacity:'0' }:{} }>
      <Slide />
      </div> */}
      <div className="container conts" ref={container} >
      
      
    <Routes>
    <Route path="/" exact element={<Lands />} />
    
    <Route path="/signup" exact element={<Signup />} />
    <Route path="/login" exact element={<Login />} /> 

    <Route path='*' element={<Redirect />} />
    
      


    </Routes>
    {/* <Product /> */}
  <Footer />
      </div>
    </div>
    </Loading.Provider>

    </>  
  )
}
 function Redirect(){
  let location = useLocation();
console.log(location)
useEffect(()=>{
  fetch('https://short-link-backend-0qdy.onrender.com/check?id='+location.pathname.split('/').join(''))
  .then(e=>{
    return e.json();
  })
  .then(e=>{
    window.location.href = e[0].url;
  })
},[])

return (<div>Loading....</div>)
 }

export default App;
