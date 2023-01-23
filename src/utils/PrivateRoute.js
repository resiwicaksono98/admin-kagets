/** @format */

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ children, isSignedIn }) {
   const { user, isLoading } = useSelector((state) => state.auth);
   const navigate = useNavigate();

   if (user) {
      return children;
   } else {
      if (isLoading) {
         return <div>Loading...</div>;
      } else {
         return navigate("/");
      }
   }
}
