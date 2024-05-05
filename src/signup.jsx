import {useState} from "react";
import { useNavigate } from "react-router-dom";
function Signup(){
let navigate = useNavigate();
let [isemail,setemail] = useState(false);
let [data,setdata] = useState({name:'',email:"",password:"",cpassword:''});

    console.log(data)
return (<div className="w-full h-[24rem] flex  items-center justify-center">
        <div className="w-[80%] md:w-[49%] h-max grid gap-4 justify-items-center relative" > 
        <h1 className="text-[2rem]">Sign Up</h1>
      
      <form method="post" className="w-full grid  gap-4 justify-items-center" onSubmit={(e)=>{
    e.preventDefault()
    if(data.name === ''){
        e.target[0].style.border = '1px solid red';
    }else{
        e.target[0].style.border = '0';

    }
    if(data.email === ''){
        e.target[1].style.border = '1px solid red';
    }else{
        e.target[1].style.border = '0';

    }
    if( data.password === '' || data.password.length
     < 6 || data.password !== data.cpassword ){
        e.target[2].style.border = '1px solid red';
      data.password.length
     < 6  e.target[3].style.border = '1px solid red';

    }else{
        e.target[2].style.border = '0';
        e.target[3].style.border = '0';

    }
    // if(data.password.length
    //     < 8 && data.email !=='' && data.password !=='' && data.name !==""){
    //         alert('password must 8 digit and more')
    //     }
if(data.email !=='' && data.password !=='' && data.password  === data.cpassword && data.password.length
     > 6 && data.name !==""){
    console.log('true')
    fetch(`https://short-link-backend-0qdy.onrender.com/reg`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status === 200) {
            // Handle success
            console.log(response);
      
          
          return response.json();
          } else {
            // Handle error
            console.log(response);
          
          }
          
        }).then(da=>{
          if(da[0]?.error){
            alert(da[0].error);

          }else{
            console.log(da);
          }
        })
        .catch((error) => {
          // Handle network or other errors
          
      
        });
}
// if(data.)

return false;
}}>
<input type="text" onKeyUp={(e)=>{
    setdata((prev)=>({
        ...prev,
        ['name']:e.target.value
    }))


}} placeholder="Username" className="w-[80%] shadow-input outline-0 h-[2.4rem] p-5  border-0  shadow-blur rounded hover:shadow-greenblur focus:shadow-greenblur"/>
<input type="text" onInput={(e)=>{
    setdata((prev)=>({
        ...prev,
        ['email']:e.target.value
    }))

}} placeholder="Email" className="w-[80%] shadow-input outline-0 h-[2.4rem] p-5  border-0  shadow-blur rounded hover:shadow-greenblur focus:shadow-greenblur"/>
<input type="password"  onInput={(e)=>{
    setdata((prev)=>({
        ...prev,
        ['password']:e.target.value
    }))

}}  placeholder="Password" className="w-[80%] shadow-input outline-0 h-[2.4rem] p-5  border-0  shadow-blur rounded hover:shadow-greenblur focus:shadow-greenblur"/>
<input type="password" onInput={(e)=>{
    setdata((prev)=>({
        ...prev,
        ['cpassword']:e.target.value
    }))

}}  placeholder="Confirm Password" className="w-[80%] shadow-input outline-0 h-[2.4rem] p-5  border-0  shadow-blur rounded hover:shadow-greenblur focus:shadow-greenblur"/>
<button type="submit"  className="w-[80%] bg-blues text-white p-2 rounded">Sign Up</button>
</form>
            <span className="text-blues cursor-pointer" onClick={()=> navigate('/login')}>Already have an account?</span>
        </div>
    </div>);
}
export default Signup;
