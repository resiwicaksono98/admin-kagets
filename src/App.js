/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getMe, refreshAccessToken } from "./features/authSlice";
import Routing from "./routes/index";

function App() {
   const dispatch = useDispatch();
   const { accessToken, refreshToken } = useSelector((state) => state.auth);
   useEffect(() => {
      const checkAuth = async () => {
         await dispatch(refreshAccessToken(refreshToken));
         if (accessToken) {
            try {
               // Cek apakah access token masih valid
               await dispatch(getMe(accessToken));
            } catch (error) {
               // Jika access token tidak valid, gunakan refresh token untuk memperbaharui access token
               await dispatch(refreshAccessToken(refreshToken));
               // Cek kembali apakah access token yang baru saja diperbaharui masih valid
               await dispatch(getMe(accessToken));
            }
         }
      };
      checkAuth();
   }, [accessToken, refreshToken, dispatch]);

   return (
      <BrowserRouter>
         <Routing />
      </BrowserRouter>
   );
}

export default App;
