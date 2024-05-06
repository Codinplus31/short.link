// import { Input } from "postcss";
import {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import {Loading} from "./App.jsx";

function Login(){
    let navigate = useNavigate();
    let [isemail,setemail] = useState(false);
    let [data,setdata] = useState({email:"",password:""});
    let [loc,setloc] = useState(localStorage.getItem('shorlink_user'));

    let {isLoggedin,setLogin,setid} =  useContext(Loading);

    console.log(data)
    return (<div className="w-full h-[19rem] flex  items-center justify-center">
        <div className="w-[80%] md:w-[49%] h-max grid gap-4 justify-items-center relative" > 
        <h1 className="text-[2rem]">Login</h1>
      <form method="post" className="w-full grid gap-4 justify-items-center" onSubmit={(e)=>{
    e.preventDefault()
    e.target[0].style.outline = '0';
    e.target[1].style.outline = '0';
    if(data.email === ''){
      e.target[0].style.border = '1px solid red';
  }else{
      e.target[0].style.border = '0';

  }
  if(data.password === ''){
    e.target[1].style.border = '1px solid red';
}else{
    e.target[1].style.border = '0';

}

if(data.email !=='' && data.password !==''){
    fetch(`https://short-link-backend-0qdy.onrender.com/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          //if (response.status === 200) {
            // Handle success
            console.log(response);
      
          
          return response.json();
        //  } else {
            // Handle error
        //    console.log(response);
          
       //   }
          
        }).then(da=>{
            console.log(da)
          if(da.hasOwnProperty("error")){
            alert(da.error);
            
          }else{
            setid(da[0].id)
           // setLogin(localStorage.getItem('shorlink_user') !== null?true:false )
            

            if(loc  === null || typeof loc  === 'undefined'){

              // if(!da.hasOwnProperty('code')){
                localStorage.setItem('shorlink_user',da[0].token)
                console.log(true)
                setloc(localStorage.getItem('shorlink_user'))
setLogin(localStorage.getItem('shorlink_user')  !== null?true:false )
              // }

            }else{
              let dlinks = [...JSON.parse(loc)];
              dlinks.push(da[0].token)
              localStorage.setItem('shorlink_user',JSON.stringify(dlinks))
      setloc(localStorage.getItem('shorlink_user'))
setLogin(localStorage.getItem('shorlink_user')  !== null?true:false )
            }


            // console.log(da);
            console.log(da,'da');
            if(JSON.parse(localStorage.getItem('links')).length > 0){
            JSON.parse(localStorage.getItem('links')).map(e=>{
              fetch(`https://short-link-backend-0qdy.onrender.com/useredit?user=${da[0].id}&userlink=${e.url_link}`)
              .then(e=> e.json()).then(e=>{
                let g = [...JSON.parse(localStorage.getItem('links'))];
                console.log(e)
                localStorage.setItem('links',JSON.stringify
                (g.filter(s=>{
                  if(s.url_link !== e.id){
                    return s;
                  }
                })))
                
              })
            })
          }
        }
        })
        .catch((error) => {
          // Handle network or other errors
          
      
        });
}

return false;
}}>
<input type="text" onInput={(e)=>{
    setdata((prev)=>({
        ...prev,
        ['email']:e.target.value
    }))

}}  placeholder="Email / Username" className="w-[80%] shadow-input outline-0 h-[2.4rem] p-5  border-0  shadow-blur rounded hover:shadow-greenblur focus:shadow-greenblur"/>
<input type="password" onInput={(e)=>{
    setdata((prev)=>({
        ...prev,
        ['password']:e.target.value
    }))

}}  placeholder="Password" className="w-[80%] shadow-input outline-0 h-[2.4rem] p-5  border-0  shadow-blur rounded hover:shadow-greenblur focus:shadow-greenblur"/>

<button type="submit"  className="w-[80%] bg-blues text-white p-2 rounded">Login</button>
</form>

            <span className="text-blues cursor-pointer" onClick={()=> navigate('/signup')}>Don't have an account?</span>
        </div>
    </div>);
}
export default Login;
