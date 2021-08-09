import React,{useState} from "react";
import "./Red.css"
import img1 from "./30.jpg"
function Red(props){
	const [user,setUser]=useState({name:"",email:"",password:"",contact:"",phone:""});
	let name,value;
	const shoot=(event)=>{ 
		name=event.target.name;
		value=event.target.value;
		setUser({...user,[name]:value})

	};

	const postdata= async(e)=>{
		e.preventDefault();
		// e.style.backgroundColor="green";
		const {name,email,password,contact,phone }=user;
		if(name && email && password && contact && phone ){
		const rep = await fetch("https://reactpp-e9ff2-default-rtdb.firebaseio.com/youtubeform.json",{
		method:"POST",
		headers:{
			"Content-Type":"application/json",
		}, 
		body:JSON.stringify({
			name,
			email,
			password,
			contact,
			phone

		}),	 
		});
		if(rep){
			setUser({name:"",email:"",password:"",contact:"",phone:""});
			alert("form successful ");
		}
	}else{
		alert("please fill all the content")
	}
	};

  const sendMessage = (e) => {
  	e.preventDefault();
    console.log('value', e.target.value); // output: “value somevalue”
    alert('hi');
  }


	
	return(
		<>
		<div>
		 <button value="somevalue2" onClick={sendMessage}>
      Send message
    </button>
		<h1>welcome to registeration form page</h1>
		<div className="con">
		<div className="main">
		<form method="POST">
		<label>name :</label><br/>
		<input type="text"name="name" placeholder="enter name"onChange={shoot} value={user.name}/><br/>
		<label>email :</label><br/>
		<input type="text"name="email"placeholder="enter email"onChange={shoot} value={user.email} /><br/>
		<label>password :</label><br/>
		<input type="text"name="password"placeholder="enter password"onChange={shoot} value={user.password}/><br/>
		<label>contact :</label><br/>
		<input type="text"name="contact"placeholder="enter contact"onChange={shoot} value={user.contact}/><br/>
		<label>phone :</label><br/>
		<input type="text"name="phone"placeholder="enter phone"onChange={shoot} value={user.phone} /><br/>
		<input type="submit"style={{backgroundColor:"green", color:"white",width:"30%",
		border:"none",padding:"2%",fontSize:"20px",marginLeft:"30%",borderRadius:"20px"}} onClick={postdata}/>
		</form>
		</div><br/>
		<img  src={img1} alt="flower"width="30%" />
		</div>
		
		</div>
		</>
		);
}
export default Red;