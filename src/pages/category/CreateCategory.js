/** @format */

import React, { useEffect } from "react";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import FormAddCategory from "../../components/features_category/FormAddCategory";

const CreateCategory = () => {
   return (
      <Layout>
         <FormAddCategory />
      </Layout>
   );
};

export default CreateCategory;
