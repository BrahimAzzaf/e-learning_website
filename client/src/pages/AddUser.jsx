import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    isAdmin: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', formData);
      console.log(response.data); // Optional: log the response
      setFormData({ name: '', email: '', password: '', isAdmin: false });
      alert('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>
            <input type="checkbox" name="isAdmin" checked={formData.isAdmin} onChange={handleCheckboxChange} />
            &nbsp; Admin
          </label>
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;










// import React, { useState } from 'react';
// import axios from 'axios';
// import { storage } from '../firebaseConfig';

// const AddUser = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         isAdmin: false,
//         image: null
//     });

//     const handleChange = (e) => {
//         if (e.target.name === 'image') {
//             setFormData({ ...formData, image: e.target.files[0] });
//         } else {
//             const { name, value } = e.target;
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const formDataWithImage = new FormData();
//             formDataWithImage.append('name', formData.name);
//             formDataWithImage.append('email', formData.email);
//             formDataWithImage.append('password', formData.password);
//             formDataWithImage.append('isAdmin', formData.isAdmin);
//             formDataWithImage.append('image', formData.image);

//             // Upload image to Firebase Storage
//             const storageRef = ref(storage, `images/${formData.image.name}`);
//             await uploadBytes(storageRef, formData.image);

//             // Get image download URL
//             const imageUrl = await getDownloadURL(storageRef);

//             // Add imageUrl to formData
//             formDataWithImage.set('image', imageUrl);

//             // Post formDataWithImage to server
//             const response = await axios.post('/api/users', formDataWithImage, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
            
//             console.log(response.data); // Optional: log the response
//             setFormData({ name: '', email: '', password: '', isAdmin: false, image: null });
//             alert('User added successfully!');
//         } catch (error) {
//             console.error('Error adding user:', error);
//             alert('Failed to add user. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <h2>Add User</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label>
//                         <input type="checkbox" name="isAdmin" checked={formData.isAdmin} onChange={handleChange} />
//                         &nbsp; Admin
//                     </label>
//                 </div>
//                 <div>
//                     <label>Profile Image:</label>
//                     <input type="file" name="image" onChange={handleChange} accept="image/*" />
//                 </div>
//                 <button type="submit">Add User</button>
//             </form>
//         </div>
//     );
// };

// export default AddUser;
