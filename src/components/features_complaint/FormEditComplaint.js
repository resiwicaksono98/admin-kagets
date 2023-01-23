/** @format */

import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../molecule/Breadcrumb";
import * as yup from "yup";
import ConfirmAlert from "../molecule/ConfirmAlert";
import { toast, Flip, ToastContainer } from "react-toastify";
import requestApi from "../../utils/axiosInstance";

const FormEditComplaint = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [complaintRes, setComplaintRes] = useState([]);

   useEffect(() => {
      let isUnmount = false;
      if (!isUnmount) {
         const getRes = async () => {
            try {
               const { data } = await requestApi.get(`/complaint_result/${id}`);
               setComplaintRes(data.data);
            } catch (error) {
               console.log(error);
            }
         };
         getRes();
      }
      return () => {
         isUnmount = false;
      };
   }, [id]);

   const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
         status: complaintRes ? complaintRes.status : "",
         message: complaintRes ? complaintRes.message : "",
         estimated_time: complaintRes ? complaintRes.estimated_time : "",
      },
      validationSchema: yup.object({
         status: yup.string().required("Status Harus Dipilih"),
         estimated_time: yup.number("Harus Angka").required("Estimated Time Wajib Diisi").max(30, "Contoh : 10 (Max 30) "),
      }),
      onSubmit: (value) => {
         ConfirmAlert({ title: "Update Data", message: "Lanjut Update News?", onClick: () => updateHandler() });
         const updateHandler = async () => {
            const loading = toast.loading("Please wait....");
            try {
               await requestApi.put(`/complaint_result/${id}`, value);
               toast.update(loading, { render: "Success Update", type: "success", autoClose: 1000, transition: Flip, isLoading: false, position: "top-center" });
               setTimeout(() => {
                  navigate("/complaint");
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
         <ToastContainer />
         <Breadcrumb
            data={[
               { name: "Complaint", class: "" },
               { name: "Edit", class: "is-active" },
            ]}
         />
         <form onSubmit={formik.handleSubmit}>
            <div className="field mb-3">
               <label className="label">Status</label>
               <div className="control">
                  <div className="select is-fullwidth">
                     <select name="status" onChange={formik.handleChange} onBlur={formik.handleBlur} {...formik.getFieldProps("status")}>
                        <option disabled>{`Choose Status`}</option>
                        <option value={"success"}>Success</option>
                        <option value={"pending"}>Pending</option>
                        <option value={"checked"}>Checked</option>
                        <option value={"failed"}>Failed</option>
                     </select>
                  </div>
                  <div className="mt-3 has-text-danger">{formik.errors.status && formik.touched.status ? formik.errors.status : ""}</div>
               </div>
            </div>
            <div className="field mb-3">
               <label className="label">Send Message</label>
               <div className="control">
                  <textarea className="textarea" name="message" placeholder="Textarea" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} />
               </div>
            </div>
            <div className="field mb-3">
               <label className="label">Estimated Time</label>
               <div className="control">
                  <input className="input" name="estimated_time" type="number" placeholder="Hari" value={formik.values.estimated_time || ""} onChange={formik.handleChange} onBlur={formik.handleBlur} />
               </div>
               <div className="mt-3 has-text-danger">{formik.errors.estimated_time && formik.touched.estimated_time ? formik.errors.estimated_time : ""}</div>
            </div>
            <button type="submit" className="button is-info">
               Update
            </button>
         </form>
      </div>
   );
};

export default FormEditComplaint;
