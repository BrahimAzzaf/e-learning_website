import React, { useState, useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import axios from 'axios';
import { storage } from '../firebaseStorage'; // Import storage
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import from firebase/storage

function AddCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [attachments, setAttachments] = useState([]); // State for attachments
  const quillRef = useRef(null);

  useEffect(() => {
    quillRef.current = new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['link', 'image'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }]
        ]
      }
    });
  }, []);

  const handleImageUpload = async (file) => {
    if (!file) return; // Check if file is provided

    const imageRef = ref(storage, `images/${file.name}`);
    try {
      await uploadBytes(imageRef, file);
      const url = await getDownloadURL(imageRef);
      setImageURL(url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleFileUpload = async (files) => {
    const fileURLs = [];
    for (const file of files) {
      const fileRef = ref(storage, `files/${file.name}`);
      try {
        await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef);
        fileURLs.push(url);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
    setAttachments(fileURLs);
    console.log('Uploaded files:', fileURLs); // Log uploaded file URLs
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const courseContent = quillRef.current.root.innerHTML;
  
    console.log('Submitting course with attachments:', attachments); // Log attachments state before submission
  
    try {
      await axios.post('/api/courses/create', {
        title,
        description,
        course: courseContent,
        image: imageURL,
        attachments, // Ensure attachments is included here
        createdAt: new Date().toISOString()
      });
      window.location.assign('/dashboard/courses');
    } catch (error) {
      console.error('There was an error creating the course!', error);
    }
  };
  

  return (
    <div className="flex-1 p-10">
      <h1 className="text-3xl font-semibold mb-6">Add Course</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
              Course Content
            </label>
            <div id="editor" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Image
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => {
                const file = e.target.files[0];
                setImage(file);
                handleImageUpload(file);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="attachments">
              Attachments
            </label>
            <input
              type="file"
              id="attachments"
              multiple
              onChange={(e) => {
                const files = e.target.files;
                handleFileUpload(files);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
