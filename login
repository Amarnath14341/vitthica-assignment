import React, { useState, useEffect } from 'react'   
import axios from 'axios';
import './App.css';  
function Login1(props) {  
    const [employee, setemployee] = useState({ Email: '', Password: ''});  
    const apiUrl = "http://3.6.93.159:7883/machstatz/add_new_user";    
    const Login = (e) => {    
            e.preventDefault();    
            debugger;   
            const data = { Email:employee.Email, Password: employee.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                const user =result.data.UserDetails;  
                console.log(result.data.message);  
                if (result.data.status == '200')    
                    props.history.push('/Dashboard')    
                else    
                alert('Invalid User');    
            })        
          };    
          
          const onChange = (e) => {    
                e.persist();    
                debugger;    
                setemployee({...employee, [e.target.name]: e.target.value});    
              } 
              function validateregform() {
              var email = document.forms["loginform"]["email"].value;
              var emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              var password = document.forms["loginform"]["Password"].value;
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
            }
            
    return (  
        
        <div class="container">  
        <div class="row">  
          <div class="col">  
            <div class="card">  
              <div class="card-body">  
                <div class="row">  
                  <div class="colimage"></div>  
                  <div class="col">  
                    <div class="p">  
                      <div class="text-center">  
                        <h1 class="text">Welcome Back!</h1>  
                      </div>  
                      <form onSubmit="validloginform" class="user">  
                        <div class="form">  
                          <input type="email" class="form-control" oninput="validateregform()"  name="Email" id="email"  placeholder="Enter Email"/>  
                        </div>  
                        <div class="form">  
                          <input type="password" class="form-control"  oninput="validateregform()" name="Password" id="Password" placeholder="Password"/>  
                        </div>  
                        { <div class="form">  
                          <div class="custom-control custom-checkbox small">  
                            <input type="checkbox" class="custom-control-input" id="customCheck"/>  
                            <label class="custom-control-label" for="customCheck">Remember Me</label>  
                          </div>  
                        </div> }  
                        <button type="submit" className="btn" block><span>Login</span></button>    
                        <hr/>  
                      </form>  
                      <hr/>  
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  
    )  
}  
  
export default Login1
