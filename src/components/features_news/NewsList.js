/** @format */

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Flip, toast, ToastContainer, Zoom } from "react-toastify";
import Breadcrumb from "../molecule/Breadcrumb";
import Search from "../molecule/Search";
import { IoAddCircleOutline } from "react-icons/io5";
import moment from "moment";
import Pagination from "../molecule/Pagination";
import ConfirmAlert from "../molecule/ConfirmAlert";
import requestApi from "../../utils/axiosInstance";

const NewsList = ({ newst }) => {
   const navigate = useNavigate();

   const handleDelete = async (e) => {
      ConfirmAlert({ title: "Delete News", message: "Yakin Menghapus Data Ini?", onClick: () => nextDelete() });
      const nextDelete = async () => {
         const loading = toast.loading("Please wait....");
         try {
            await requestApi.delete(`news/${e.id}`);
            toast.update(loading, { render: "Success Delete", type: "success", autoClose: 1000, transition: Flip, isLoading: false, position: "top-center" });
            setTimeout(() => {
               navigate(0);
            }, 1200);
         } catch (error) {
            console.log(error.response.data);
            toast.update(loading, { render: error.response.data.msg, type: "error", autoClose: 1000, transition: Flip, isLoading: false, position: "top-center" });
         }
      };
   };
   return (
      <div className="container pb-8">
         <ToastContainer transition={Zoom} />
         <Breadcrumb
            data={[
               { name: "News", class: "" },
               { name: "Manage", class: "is-active" },
            ]}
         />
         <Search />
         <NavLink to="/news/create" className={"button is-info mb-4"}>
            <IoAddCircleOutline size={25} className="mx-1" /> Create News
         </NavLink>
         <div className="columns is-multiline">
            {newst.map((news) => (
               <div className="column is-4" key={news.id}>
                  <div className="card">
                     <div className="card-image">
                        <figure className="image is-4by3">
                           <img src={"http://localhost:5000/images/news/" + news.image} alt="news/images" />
                        </figure>
                     </div>
                     <div className="card-content">
                        <div className="media">
                           <div className="media-content">
                              <p className="title is-4">{news.title}</p>
                           </div>
                        </div>
                        <div className="content">
                           <div className="is-flex title is-5	">
                              <div>Status : </div>
                              <div className="has-text-success px-3">Publish</div>
                           </div>
                           <time dateTime="2016-1-1">
                              <strong>{moment(news.createdAt).format("h:mm:A - D MMM YYYY")}</strong>
                           </time>
                        </div>
                        <div>
                           <button className="button is-danger" onClick={() => handleDelete({ id: news.id })}>
                              Delete
                           </button>
                           <NavLink to={`/news/${news.id}`} className="button is-info mx-4">
                              Edit
                           </NavLink>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <Pagination />
      </div>
   );
};

export default NewsList;
