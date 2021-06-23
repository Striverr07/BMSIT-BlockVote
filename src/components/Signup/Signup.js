import React from "react";
import Login from "../Login/Login";
import "./Signup.css";
import Sign from "./Signup.svg";


const Signup = () => {
  
  return (
    <section>
      <div className="imgbx">
        <img src={Sign} />
      </div>
      <div className="contentbx">
        <div className="formbx">
          <h2>Signup</h2>
          <form>
            <div className="inputbx">
              <span>Name</span>
              <input type="text" required />
            </div>
            <div className="inputbx">
              <span>USN</span>
              <input type="text" required />
            </div>
            <div className="inputbx">
              <span>E-mail</span>
              <input type="text" required />
            </div>
            <div className="inputbx">
              <span>Password</span>
              <input type="password" required />
            </div>
            <div className="inputbx">
              <span>Confirm Password</span>
              <input type="password" required />
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" name="" /> Remember me
              </label>
            </div>
            
            <div className="inputbx">
              <input type="Submit" value="Sign up" name="" />
            </div>
           
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;