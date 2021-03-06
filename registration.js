import React, { useState } from 'react'  
import axios from 'axios';
import './App.css';  
function Regster(props) {  
  const [data, setdata] = useState({ Email: '', Password: '', firstName: '', lastName: '', username: '' })  
  const apiUrl = "http://3.6.93.159:7883/machstatz/get_all_users";  
  const Registration = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = { Email: data.Email, Password: data.Password, firstName: data.firstName, lastName: data.lastName, userName: data.userName };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status === 'Invalid')  
          alert('Invalid User');  
        else  
          props.history.push('/Dashboard')  
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  function validateregform() {
    var fname = document.forms["registrationform"]["fname"].value;
    var lname = document.forms["registrationform"]["lname"].value;
    var email = document.forms["registrationform"]["email"].value;
    var emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var password = document.forms["registrationform"]["password"].value;
    if (fname !== "" && parseInt(fname.length) < 8) {
      document.getElementById("exampleInputfirstName").style.display = "none";
  } else {
      document.getElementById("exampleInputfirstName").style.display = "block";
  }
  if (lname === "" && parseInt(lname.length) < 3) {
      document.getElementById("exampleInputlastName").style.display = "block";
  } else {
      document.getElementById("exampleInputlastName").style.display = "none";
  }
  if (email == "") {
    document.getElementById("email").style.display = "block";
} else if (!emailfilter.test(email)) {
    document.getElementById("email").style.display = "block";

} else {
    document.getElementById("email").style.display = "none";
}
if (password == "") {
              document.getElementById("Password").style.display = "block";
          } else {
              document.getElementById("Password").style.display = "none";
          }
          if (password.search(/[a-z]/i) < 0) {
              document.getElementById("Password").style.display = "block";
          } else {
              document.getElementById("Password").style.display = "none";
          }
          if (password.search(/[0-9]/) < 0) {
              document.getElementById("Password").style.display = "block";
          } else {
              document.getElementById("Password").style.display = "none";
          }
  return false
  }
  return (  
    <div class="container">  
      <div class="row">  
        <div class="btnx" style={{ "margin": "6px" }}>  
          Add New Contact  
       </div>  
      </div>  
      <div class="card" style={{ "marginTop": "5rem!important;" }}>  
        <div class="cardbody">  
          <div class="row">  
            <div class="col">  
              <div class="p">  
                <div class="text-center">  
                  <h1 class="align">Create a New User</h1>  
                </div>  
                <form onsubmit="return validateregform()"name="registrationform" class="user">  
                  <div class="form-group row">  
                    <div class="email"> 
                    <label for="email">Email:</label> 
                      <input type="text" name="email" oninput="validateregform()"  id="emailerror" placeholder="Email" />  
                    </div>  
                    <div class="col"> 
                    <label for="password">password:</label> 
                      <input type="Password" name="Password" oninput="validateregform()" placeholder="Password" />  
                    </div>  
                  </div>  
                  <div class="group">  
                  <label for="fname">First Name:</label>
                    <input type="text" name="fName" oninput="validateregform()"   id="exampleInputfirstName" placeholder="firstName" />  
                  </div>  
                  <div class="form-group row">  
                    <div class="last"> 
                    <label for="lname">last Name:</label> 
                      <input type="text" name="lname" oninput="validateregform()"  id="exampleInputlastName" placeholder="lastName" />  
                    </div>  
                    <div class="col"> 
                    <label for="uname">User Name:</label> 
                      <input type="text" name="user Name" oninput="validateregform()" id="exampleRepeatPassword" placeholder="userName" />  
                    </div>  
                  </div>  
                  <button type="submit" class="btn">  
                    Create User  
                </button>  
                  <hr />  
                </form>  
                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Regster 
