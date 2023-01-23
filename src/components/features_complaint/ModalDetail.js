/** @format */

import React from "react";
import moment from "moment";

const ModalDetail = ({ isShowing, hide, data }) => {
   return isShowing ? (
      <React.Fragment>
         <div className={`modal is-active`}>
            <div className="modal-background" />
            <div className="modal-card">
               <header className="modal-card-head">
                  <p className="modal-card-title">Detail Complaint </p>
                  <button onClick={hide} className="delete" />
               </header>
               <section className="modal-card-body">
                  <ul className="">
                     <li className="py-2 px-3">
                        Nama:{" "}
                        <strong>
                           {" "}
                           {data.user?.firstname} {data.user?.lastname}
                        </strong>
                     </li>
                     <li className="py-2 px-3">
                        Email: <strong> {data.user?.email}</strong>
                     </li>
                     <li className="py-2 px-3">
                        Jenis Mitra: <strong> {data.user?.mitra_type}</strong>
                     </li>
                     <li className="py-2 px-3">
                        Jenis Masalah: <strong> {data.problem_type?.name}</strong>
                     </li>
                     <li className="py-2 px-3">
                        Deskripsi Masalah: <strong> {data.description}</strong>
                     </li>
                     <li className="py-2 px-3">
                        Status Complaint: <strong> {data.complaint_result?.status}</strong>
                     </li>
                     <li className="py-2 px-3">
                        Estimasi Complaint: <strong> {data.complaint_result?.estimated_time}</strong>
                     </li>
                     <li className="py-2 px-3 flex">
                        Created At : <strong>{moment(data.createdAt).format("h:mm:A - D MMM YYYY")} </strong>{" "}
                     </li>
                     <li className="py-2 px-3">
                        <div>Gambar Complaint: </div>
                        <figure className="py-4 image is-4by-3">
                           <img src={`http://localhost:5000/images/complaints/${data.support_image || "No Images"}`} alt="detailComplaint" />
                        </figure>
                     </li>
                  </ul>
               </section>
            </div>
         </div>
      </React.Fragment>
   ) : null;
};

export default ModalDetail;
