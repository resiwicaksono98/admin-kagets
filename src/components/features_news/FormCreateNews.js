/** @format */

import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allCategory } from "../../api/categoryApi";
import * as yup from "yup";
import Breadcrumb from "../molecule/Breadcrumb";
import { Flip, toast, ToastContainer, Zoom } from "react-toastify";
import axios from "axios";
import requestApi from "../../utils/axiosInstance";

const FormCreateNews = () => {
   const navigate = useNavigate();
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      const getCategory = async () => {
         await requestApi
            .get("/categories")
            .then((res) => setCategories(res.data.data))
            .catch((err) => console.log(err));
      };
      getCategory();
   }, []);

   const formik = useFormik({
      initialValues: {},
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
      onSubmit: async (value) => {
         const loading = toast.loading("Loading....");
         try {
            await requestApi.post(`/news`, value, {
               headers: {
                  "Content-Type": "multipart/form-data",
               },
            });
            toast.update(loading, { render: "Success Create", type: "success", autoClose: 1000, transition: Flip, isLoading: false, position: "top-center" });
            setTimeout(() => {
               navigate("/news");
            }, 1200);
         } catch (error) {
            console.log(error.response.data);
            toast.update(loading, { render: error.response.data.msg, type: "error", autoClose: 1000, transition: Flip, isLoading: false, position: "top-center" });
         }
      },
   });
   return (
      <div>
         <Breadcrumb data={[{ name: "News" }, { name: "Create", class: "is-active" }]} />
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
                     <div className="select">
                        <select name="categoryId" onChange={formik.handleChange} onBlur={formik.handleBlur}>
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
                        Submit
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

export default FormCreateNews;
