// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// import '../Style/Signup.css'
import axios from 'axios'

const Signup = () => {
    let [input, setinput] = useState({
        Name:"",
        Email:"",
        Password:""
      });
    
      let fun1=(e)=>{
      let {name,value}=e.target
      setinput({...input,[name]:value})
      console.log(input);
      }
     
      let abhi=async(e)=>{
        e.preventDefault();
        // console.log(input);
      let res = await axios.post('http://localhost:4000/api/Signup',input)
     if(res.data=='hiiiii'){
      alert('signup ho gya')
     }
    }

  return (
   <div className='body'>
   <form className="form" onSubmit={abhi}>
    <p className="title">Signup</p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input required="" value={input.Name} name='Name'  placeholder="" onChange={fun1} type="text" className="input1"/>
            <span>Name</span>
        </label>

    </div>  
            
    <label>
        <input required="" value={input.Email} name='Email' placeholder="" onChange={fun1} type="email" className="input1"/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" value={input.Password} name='Password'  placeholder="" onChange={fun1} type="password" className="input1"/>
        <span>Password</span>
    </label>
    <button className="submit">Submit</button>
    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
</div> 
    
  )
}

export default Signup