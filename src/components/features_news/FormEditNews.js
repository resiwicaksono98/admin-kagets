/** @format */

import axios from "axios";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { allCategory } from "../../api/categoryApi";
import Breadcrumb from "../molecule/Breadcrumb";
import * as yup from "yup";
import { Flip, toast, ToastContainer, Zoom } from "react-toastify";
import ConfirmAlert from "../molecule/ConfirmAlert";
import requestApi from "../../utils/axiosInstance";

const FormEditNews = () => {
   const navigate = useNavigate();
   const [categories, setCategories] = useState([]);
   const [news, setNews] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      let isUnmount = false;
      if (!isUnmount) {
         const getNews = async () => {
            try {
               const { data } = await requestApi.get(`/news/${id}`);
               setNews(data.data);
            } catch (error) {
               console.log(error);
            }
         };
         const getCategory = async () => {
            await requestApi
               .get("/categories")
               .then((res) => setCategories(res.data.data))
               .catch((err) => console.log(err));
         };
         getNews();
         getCategory();
      }
      return () => {
         isUnmount = false;
      };
   }, [id]);

   const formik = useFormik({
      enableReinitialize: true,
      // initial value
      initialValues: {
         title: news[0]?.title,
         categoryId: news[0]?.categoryId,
         description: news[0]?.description,
         rate: news[0]?.rate,
         previewImage: `http://localhost:5000/images/news/${news[0]?.image}`,
         image: news[0]?.image,
      },
      // Validate schema
      validationSchema: yup.object({
         categoryId: yup.string().required("Category Harus Dipilih"),
         title: yup.string().required("Title Harus Diisi"),
         rate: yup
            .number("Harus Angka")
            .required("Rating Wajib Diisi")
            .max(5.0, "Contoh : 4.2 (Max 5.0) ")
            .test("Wajib", "Wajib Angka desimal contoh 4.2 ", (value) => (value + "").match(/^\d(\.\d{1,2})?$/)),
         description: yup.string().required("Description Harus Diisi"),
      }),
      // Handle submission
      onSubmit: async (value) => {
         ConfirmAlert({ title: "Update Data", message: "Lanjut Update News?", onClick: () => updateHandler() });

         const updateHandler = async () => {
            console.log(value);
            const loading = toast.loading("Please wait....");
            try {
               await requestApi.put(
                  `/news/${id}`,
                  {
                     title: value.title,
                     description: value.description,
                     categoryId: value.categoryId,
                     rate: value.rate,
                     image: value.image,
                  },
                  {
                     headers: {
                        "content-type": "multipart/form-data",
                     },
                  }
               );
               toast.update(loading, { render: "Success Update", type: "success", autoClose: 1000, transition: Flip, isLoading: false, position: "top-center" });
               setTimeout(() => {
                  navigate("/news");
               }, 1200);
            } catch (error) {
               console.log(error.response.data);
               toast.update(loading, { render: error.response.data.msg, type: "error", autoClose: 1000, transition: Flip, isLoading: false, position: "top-center" });
            }
         };
      },
   });
   return (
      <div>
         <Breadcrumb data={[{ name: "News" }, { name: `Edit News`, class: "is-active" }]} />
         <ToastContainer transition={Zoom} />
         <form onSubmit={formik.handleSubmit}>
            <div className="field mb-3">
               <label className="label">Title</label>
               <div className="control">
                  <input className="input" type="text" name="title" placeholder="Text input" value={formik.values.title || ""} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  <div className="mt-3 has-text-danger">{formik.errors.title && formik.touched.title ? formik.errors.title : ""}</div>
               </div>
            </div>
            <div>
               <div className="field mb-3">
                  <label className="label">Category</label>
                  <div className="control">
                     <div className="select is-fullwidth">
                        <select name="categoryId" onChange={formik.handleChange} onBlur={formik.handleBlur} {...formik.getFieldProps("categoryId")}>
                           <option>{`Choose category`}</option>
                           {categories.map((category) => (
                              <option key={category.id} value={category.id}>
                                 {category.name}
                              </option>
                           ))}
                        </select>
                     </div>
                     <div className="mt-3 has-text-danger">{formik.errors.categoryId && formik.touched.categoryId ? formik.errors.categoryId : ""}</div>
                  </div>
               </div>
               <div className="field mb-3">
                  <label className="label">Description</label>
                  <div className="control">
                     <textarea className="textarea" name="description" placeholder="Textarea" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  </div>
                  <div className="mt-3 has-text-danger">{formik.errors.description && formik.touched.description ? formik.errors.description : ""}</div>
               </div>
            </div>
            <div className="field mb-3">
               <label className="label">Rate</label>
               <div className="control">
                  <input className="input" name="rate" type="number" placeholder="Text input" value={formik.values.rate || ""} onChange={formik.handleChange} onBlur={formik.handleBlur} />
               </div>
               <div className="mt-3 has-text-danger">{formik.errors.rate && formik.touched.rate ? formik.errors.rate : ""}</div>
            </div>
            <div className="columns">
               <div className="field column is-6">
                  <label className="label">Image</label>
                  <div className="file">
                     <label className="file-label">
                        <input
                           className="file-input"
                           type="file"
                           name="image"
                           onChange={(e) => {
                              formik.setFieldValue("image", e.currentTarget.files[0]);
                              formik.setFieldValue("previewImage", URL.createObjectURL(e.currentTarget.files[0]));
                           }}
                        />
                        <span className="file-cta">
                           <span className="file-label">Pilih File Gambar</span>
                        </span>
                     </label>
                  </div>
                  <div className="control pt-4">
                     <button type="submit" className="button is-info">
                        Update
                     </button>
                  </div>
               </div>
               <div className="field column is-6">
                  <div className="mb-4">{formik.values.previewImage ? <img src={formik.values.previewImage} alt="preview" /> : <div className="mt-5">No Image Preview</div>}</div>
               </div>
            </div>
         </form>
      </div>
   );
};

export default FormEditNews;
