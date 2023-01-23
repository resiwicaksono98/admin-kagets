/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticated, getMe, LoginUser, refreshToken, reset } from "../features/authSlice";
import Cookies from "js-cookie";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

   useEffect(() => {
      if (user || isSuccess) {
         if (user[0].role === "admin") {
            navigate("/dashboard");
         }
      }
   }, [user, isSuccess, dispatch, navigate]);

   const Auth = (e) => {
      e.preventDefault();
      dispatch(LoginUser({ email, password }));
   };
   return (
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
         <div className="hero-body">
            <div className="container">
               <div className="columns is-centered">
                  <div className="column is-4">
                     <form className="box" onSubmit={Auth}>
                        {isError && <p className="has-text-center">{message}</p>}
                        <h1 className="title is-2">Sign In </h1>
                        <div className="field">
                           <label className="label">Email</label>
                           <div className="control">
                              <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                           </div>
                        </div>
                        <div className="field">
                           <label className="label">Password</label>
                           <div className="control">
                              <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******" />
                           </div>
                        </div>
                        <div className="field mt-5">
                           <button type="submit" className="button is-success is-fullwidth">
                              {isLoading ? "Loading..." : Login}Login
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Login;
