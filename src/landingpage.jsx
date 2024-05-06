import {useEffect, useRef, useState, useContext, useCallback} from "react";
import { useHref, useLocation, useNavigate } from "react-router-dom";
import {Loading} from "./App.jsx";

function Lands(){
    let [inp,setinp] = useState();
    let [retry,setretry] = useState(0);
    let [data,setdata] = useState(null);
    let [loc,setloc] = useState(localStorage.getItem('links'));
    let navigate = useNavigate();
    console.log(localStorage.getItem('shorlink_user'))
    let {isLoggedin,setLogin,id} =  useContext(Loading);

    useEffect(()=>{
      setLogin(localStorage.getItem('shorlink_user') !== null?true:false )
      console.log(isLoggedin)
      if(isLoggedin === true){
        if(typeof id !== 'undefined' &&  id !== null){

          fetch('https://short-link-backend-0qdy.onrender.com/all',{
          headers: {
              'Authorization':`Bearer ${localStorage.getItem('shorlink_user')}`
          }
          }).then((e)=>{
        return e.json()
      }).then((e)=>{
              e.reverse()
          setdata(e)
        })
        }

      }else  {
        setdata(JSON.parse(localStorage.getItem('links')).reverse())
        console.log(localStorage.getItem('links'),)
      }


    },[loc,isLoggedin,id, retry])
    return (<div className="w-[100%] h-max">
        <div className="grid justify-items-center gap-4  content-center h-[28rem]">
            <h1 className="text-[2rem] sm:text-[3.7rem]  md:text-[4.6rem] w-[100%] text-center">GENERATE SHORT LINKS <br/>
            
            <span className="text-green-600">IN SECONDS</span></h1>
            <input type="text" onKeyUp={(e)=>{
                setinp(e.target.value)
            }} onChange={(e)=>{
              setinp(e.target.value)
          }} className="w-[90%] h-[2rem] p-2 sm:w-[22rem] border-0 outline-0 shadow-blur rounded hover:shadow-greenblur focus:shadow-greenblur"/>
            <button onClick={()=>{
              setloc(localStorage.getItem('links'))
        if(!isLoggedin){
                fetch('https://short-link-backend-0qdy.onrender.com/cut',{
                    method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: inp}),
                }).then((response) => {
                    if (response.status === 200) {
                      // Handle success
                      console.log(response);
                
                    
                    return response.json();
                    } else {
                      // Handle error
                      console.log(response);
                    
                    }
                    
                  }).then(da=>{
                    // if(da[0]?.error){
                      console.log(da.hasOwnProperty('code'))
                    //   alert(da[0].error);
                    if(loc  === null || typeof loc  === 'undefined'){

                      if(!da.hasOwnProperty('code')){
                        localStorage.setItem('links',JSON.stringify([da]))
                        console.log(true)
                        setloc(localStorage.getItem('links'))

                      }

                    }else{
                      if(!da.hasOwnProperty('code')){                      
                      console.log(false)
                      let dlinks = [...JSON.parse(loc)];
                      dlinks.push(da)
                      localStorage.setItem('links',JSON.stringify(dlinks))
              setloc(localStorage.getItem('links'))

                    }
                    }
                    
                    // }else{
                      console.log(da);
                    // }
                  })
        }else{
fetch('https://short-link-backend-0qdy.onrender.com/usercut',{
                    method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: inp,id: id}),
                }).then((response) => {
                    if (response.status === 200) {
                      // Handle success
                      console.log(response);
                
                    
                    return response.json();
                    } else {
                      // Handle error
                      console.log(response);
                    
                    }
                    
                  }).then(da=>{
   // setid(localStorage.getItem('shorlink_user'))
              setretry((prev)=> prev + 1);     
    // if(da[0]?.error){
                      console.log(da)
                    //   alert(da[0].error);
                   // if(loc  === null || typeof loc  === 'undefined'){

                   /*   if(!da.hasOwnProperty('code')){
                        localStorage.setItem('links',JSON.stringify([da]))
                        console.log(true)
                        setloc(localStorage.getItem('links'))

                      }*/

                 //   }else{
                      /*if(!da.hasOwnProperty('code')){                      
                      console.log(false)
                      let dlinks = [...JSON.parse(loc)];
                      dlinks.push(da)
                      localStorage.setItem('links',JSON.stringify(dlinks))
              setloc(localStorage.getItem('links'))

                    }*/
                   // }
                    
                    // }else{
                      console.log(da);
                    // }
                  })
        }
            }}  className="bg-green-600 p-2 text-white rounded w-max">Generate ShortLink</button>
        </div>
    <div className="w-full h-max flex items-center flex-col">
      {data && data?.map((e,i)=>(
        <div className="w-[80%] max-w-[400px] mb-[1rem] cursor-pointer h-[8rem] border rounded-md relative flex flex-col justify-center items-center" onClick={()=>{
          navigate('/'+e.url_link)
        }} key={i}>
        <div className="h-[1.5rem] w-[1.5rem] bg-white border absolute left-[96%] rounded-lg flex justify-center top-[-4%] items-center"><svg style={{transform: 'rotateZ(-50deg)'}}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
      </svg></div>
                  <h1 className="listcount w-[12rem] text-center">{e.url_link}</h1>
                  <div className="flex"><span className="mr-[0.4rem] text-gray-500">----</span><div className="h-[1.5rem] w-[1.5rem] flex justify-center items-center bg-white border rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="17" height="17">
  <path fillRule="evenodd" d="M1.469 3.75a3.5 3.5 0 0 0 5.617 4.11l.883.51c.025.092.147.116.21.043.15-.176.318-.338.5-.484.286-.23.3-.709-.018-.892l-.825-.477A3.501 3.501 0 0 0 1.47 3.75Zm2.03 3.482a2 2 0 1 1 2-3.464 2 2 0 0 1-2 3.464ZM9.956 8.322a2.75 2.75 0 0 0-1.588 1.822L7.97 11.63l-.884.51A3.501 3.501 0 0 0 1.47 16.25a3.5 3.5 0 0 0 6.367-2.81l10.68-6.166a.75.75 0 0 0-.182-1.373l-.703-.189a2.75 2.75 0 0 0-1.78.123L9.955 8.322ZM2.768 15.5a2 2 0 1 1 3.464-2 2 2 0 0 1-3.464 2Z" clipRule="evenodd" />
  <path d="M12.52 11.89a.5.5 0 0 0 .056.894l3.274 1.381a2.75 2.75 0 0 0 1.78.123l.704-.189a.75.75 0 0 0 .18-1.373l-3.47-2.004a.5.5 0 0 0-.5 0L12.52 11.89Z" />
</svg>



                  </div><span className="ml-[0.4rem] text-gray-500">----</span></div>
                  <h1 className="listcount w-[12rem] text-center">{e.url}</h1>
                  <button onClick={(r)=>{
                r.stopPropagation()
                    navigator.clipboard.writeText(location.href+e.url_link)
                  }} onFocus={(r)=>{
                    r.target.style.background = 'black';
                    r.target.innerText = 'Copied';

                  }} onBlur={(r)=>{
                    r.target.style.background = '#096AE1';
                    r.target.innerText = 'Copy';

                  }} className="w-[90%] h-[2rem] bg-blues mt-[2px] text-white rounded ">Copy</button>
                  
      </div>
      ))}

    </div>
    </div>
    );
}
export default Lands;
