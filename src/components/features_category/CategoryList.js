/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer, Zoom, Flip } from "react-toastify";
import requestApi from "../../utils/axiosInstance";
import Breadcrumb from "../molecule/Breadcrumb";
import ConfirmAlert from "../molecule/ConfirmAlert";

const CategoryList = () => {
   const [categories, setCategories] = useState([]);
   const navigate = useNavigate();

   const getCategory = async () => {
      try {
         const { data } = await requestApi.get(`/categories`);
         setCategories(data.data);
      } catch (error) {
         console.log(error.response.data);
      }
   };

   const handleDelete = async (id) => {
      ConfirmAlert({ title: "Delete Category", message: "Yakin ingin menghapus category?", onClick: () => deleteAction() });

      const deleteAction = async () => {
         const loading = toast.loading("Please wait....");
         try {
            await requestApi.delete(`/categories/${id}`);
            toast.update(loading, { render: "Success Delete", type: "success", autoClose: 1000, transition: Flip, isLoading: false, position: "top-center" });
            setTimeout(() => {
               navigate(0);
            }, 1200);
         } catch (error) {
            console.log(error);
         }
      };
   };

   useEffect(() => {
      getCategory();
   }, []);
   return (
      <div>
         <ToastContainer transition={Zoom} />
         <Breadcrumb
            data={[
               { name: "Category", class: "" },
               { name: "Manage", class: "is-active" },
            ]}
         />
         <NavLink to="/category/create" className={"button is-info mb-4"}>
            <IoAddCircleOutline size={25} className="mx-1" /> Create Category
         </NavLink>
         <div className="table-container py-4">
            <table className="table is-striped is-narrow is-hoverable is-fullwidth">
               <thead>
                  <tr>
                     <th className="has-text-centered">No</th>
                     <th className="has-text-centered">Name</th>
                     <th className="has-text-centered " style={{ width: "20px" }}>
                        Actions
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {categories.map((category, index) => (
                     <tr key={category.id}>
                        <td className="has-text-centered">{1 + index}</td>
                        <td className="has-text-centered">{category.name}</td>
                        <td className="is-flex is-justify-content-center is-align-content-center ">
                           <NavLink to={`/category/${category.id}`} className="button is-info mx-4">
                              Edit
                           </NavLink>
                           <button className="button is-danger" onClick={() => handleDelete(category.id)}>
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default CategoryList;
