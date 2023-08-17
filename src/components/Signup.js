import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';


const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name:"",email: "", password: "",cpassword: "" });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    const {name,email,password}=credentials;
    const response = await fetch(`http://localhost:9090/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      localStorage.setItem('token',json.authtoken);
      navigate("/login");
      props.showAlert("Account created Successfully","success")
    }
    else{
      props.showAlert("Invalid Credentials","danger")
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmitButton}>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            className="form-control"
            type="text"
            id="name"
            placeholder="Enter Name"
            onChange={onChange}
            name="name"
            required
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
            name="email"
            required
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={onChange}
            name="password"
            minLength={5} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"> Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            placeholder="Password"
            onChange={onChange}
            name="cpassword"
            minLength={5} required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
