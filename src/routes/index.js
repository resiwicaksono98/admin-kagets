/** @format */

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Login from "../components/Login";
import EditComplaint from "../pages/complaint/EditComplaint";
import Complaint from "../pages/complaint/Index";
import Dashboard from "../pages/Dashboard";
import CreateNews from "../pages/news/CreateNews";
import EditNews from "../pages/news/EditNews";
import News from "../pages/news/Index.js";
import Category from "../pages/category/Index.js";
import EditCategory from "../pages/category/EditCategory";
import CreateCategory from "../pages/category/CreateCategory";
import Problem from "../pages/problem/Index.js";
import CreateProblem from "../pages/problem/CreateProblem";
import EditProblem from "../pages/problem/EditProblem";
import { useSelector } from "react-redux";
import PrivateRoute from "../utils/PrivateRoute";

const Index = () => {
   //  const [isSignedIn, setIsSignedIn] = useState(false);
   const { user } = useSelector((state) => state.auth);

   return (
      <div>
         <Routes>
            <Route path="/" element={user ? <Navigate to={"/dashboard"} /> : <Login />} />
            <Route
               path="/dashboard"
               element={
                  <PrivateRoute>
                     <Dashboard />
                  </PrivateRoute>
               }
            />
            <Route
               path="/news"
               element={
                  <PrivateRoute>
                     <News />
                  </PrivateRoute>
               }
            />
            <Route
               path="/news/create"
               element={
                  <PrivateRoute>
                     <CreateNews />
                  </PrivateRoute>
               }
            />
            <Route
               path="/news/:id"
               element={
                  <PrivateRoute>
                     <EditNews />
                  </PrivateRoute>
               }
            />
            <Route
               path="/complaint"
               element={
                  <PrivateRoute>
                     <Complaint />
                  </PrivateRoute>
               }
            />
            <Route
               path="/complaint_result/:id"
               element={
                  <PrivateRoute>
                     <EditComplaint />
                  </PrivateRoute>
               }
            />
            <Route
               path="/category"
               element={
                  <PrivateRoute>
                     <Category />
                  </PrivateRoute>
               }
            />
            <Route
               path="/category/create"
               element={
                  <PrivateRoute>
                     <CreateCategory />
                  </PrivateRoute>
               }
            />
            <Route
               path="/category/:id"
               element={
                  <PrivateRoute>
                     <EditCategory />
                  </PrivateRoute>
               }
            />
            <Route
               path="/problem"
               element={
                  <PrivateRoute>
                     <Problem />
                  </PrivateRoute>
               }
            />
            <Route
               path="/problem/create"
               element={
                  <PrivateRoute>
                     <CreateProblem />
                  </PrivateRoute>
               }
            />
            <Route
               path="/problem/:id"
               element={
                  <PrivateRoute>
                     <EditProblem />
                  </PrivateRoute>
               }
            />
         </Routes>
      </div>
   );
};

export default Index;
