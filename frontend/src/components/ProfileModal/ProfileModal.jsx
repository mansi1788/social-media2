


// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { closeModal } from "../../actions/ModalAction.js";
// import { uploadImage } from "../../actions/uploadAction.js";
// import { updateUser } from "../../actions/UserAction";
// import "./ProfileModal.css";

// const ProfileModal = ({ data }) => {
//   const { password, ...other } = data;
//   const [formData, setFormData] = useState(other);
//   const [profileImage, setProfileImage] = useState(null);
//   const [coverImage, setCoverImage] = useState(null);
//   const dispatch = useDispatch();
//   const modalOpened = useSelector((state) => state.modalReducer.isModalOpen); // Get modal state

//   if (!modalOpened) return null; // Don't render if modal is closed

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onImageChange = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       let img = event.target.files[0];
//       event.target.name === "profileImage"
//         ? setProfileImage(img)
//         : setCoverImage(img);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let UserData = formData;

//     if (profileImage) {
//       const data = new FormData();
//       const fileName = Date.now() + profileImage.name;
//       data.append("name", fileName);
//       data.append("file", profileImage);
//       UserData.profilePicture = fileName;
//       dispatch(uploadImage(data));
//     }

//     if (coverImage) {
//       const data = new FormData();
//       const fileName = Date.now() + coverImage.name;
//       data.append("name", fileName);
//       data.append("file", coverImage);
//       UserData.coverPicture = fileName;
//       dispatch(uploadImage(data));
//     }

//     dispatch(updateUser(data._id, UserData));
//     dispatch(closeModal());
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-container">
//         <form className="infoForm" onSubmit={handleSubmit}>
//           <h3>Your Info</h3>
//           <input value={formData.firstname} onChange={handleChange} type="text" placeholder="First Name" name="firstname" className="infoInput" />
//           <input value={formData.lastname} onChange={handleChange} type="text" placeholder="Last Name" name="lastname" className="infoInput" />
//           <input value={formData.worksAt} onChange={handleChange} type="text" placeholder="Works at" name="worksAt" className="infoInput" />
//           <input value={formData.livesIn} onChange={handleChange} type="text" placeholder="Lives in" name="livesIn" className="infoInput" />
//           <input value={formData.country} onChange={handleChange} type="text" placeholder="Country" name="country" className="infoInput" />
//           <input value={formData.relationship} onChange={handleChange} type="text" placeholder="Relationship status" name="relationship" className="infoInput" />

//           <div>
//             Profile image <input type="file" name="profileImage" onChange={onImageChange} />
//             Cover image <input type="file" name="coverImage" onChange={onImageChange} />
//           </div>

//           <button className="button infoButton" type="submit">Update</button>
//           <button className="button close-button" onClick={() => dispatch(closeModal())}>Close</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProfileModal;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { closeModal } from "../../actions/ModalAction.js";
import { uploadImage } from "../../actions/uploadAction.js";
import { updateUser } from "../../actions/UserAction";
import "./ProfileModal.css";

const ProfileModal = ({ data }) => {
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const modalOpened = useSelector((state) => state.modalReducer.isModalOpen);

  if (!modalOpened) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;

    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      dispatch(uploadImage(data));
    }

    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      dispatch(uploadImage(data));
    }

    dispatch(updateUser(data._id, UserData));
    dispatch(closeModal());
  };

  return (
    <div className="modal-overlay">
      <motion.div 
        className="modal-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
      >
        <form className="infoForm" onSubmit={handleSubmit}>
          <h3>Your Info</h3>

          <div className="form-row">
            <input 
              value={formData.firstname} 
              onChange={handleChange} 
              type="text" 
              placeholder="First Name" 
              name="firstname" 
              className="infoInput half-width" 
            />
            <input 
              value={formData.lastname} 
              onChange={handleChange} 
              type="text" 
              placeholder="Last Name" 
              name="lastname" 
              className="infoInput half-width" 
            />
          </div>

         

          <div className="form-row">
            <input 
              value={formData.livesIn} 
              onChange={handleChange} 
              type="text" 
              placeholder="Lives in" 
              name="livesIn" 
              className="infoInput half-width" 
            />
            <input 
              value={formData.country} 
              onChange={handleChange} 
              type="text" 
              placeholder="Country" 
              name="country" 
              className="infoInput half-width" 
            />
          </div>
          <div>

          <input 
            value={formData.relationship} 
            onChange={handleChange} 
            type="text" 
            placeholder="Relationship status" 
            name="relationship" 
            className="infoInput" 
          />
           <input 
            value={formData.worksAt} 
            onChange={handleChange} 
            type="text" 
            placeholder="Works at" 
            name="worksAt" 
            className="infoInput" 
          />
          </div>

          <div className="file-inputs">
            <label>Profile image</label>
            <input type="file" name="profileImage" onChange={onImageChange} />
            <label>Cover image</label>
            <input type="file" name="coverImage" onChange={onImageChange} />
          </div>

          <button className="button infoButton" type="submit">Update</button>
          <button className="button close-button" onClick={() => dispatch(closeModal())}>Close</button>
        </form>
      </motion.div>
    </div>
  );
};

export default ProfileModal;
