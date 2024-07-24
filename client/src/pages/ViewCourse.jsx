// ViewCourse.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewCourse = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        console.log(`Fetching course with ID: ${courseId}`); // Add logging
        const response = await axios.get(`/api/courses/${courseId}`);
        console.log('Course data:', response.data); // Add logging
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course:', error); // Add logging
      }
    };

    fetchCourse();
  }, [courseId]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center p-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-500 mb-2">
          Created At: {new Date(course.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-500 mb-4">
          Created By: {course.createdBy?.name || 'ADMIN'}
        </p>
        <p className="text-center text-lg font-bold mb-4">
          Description
        </p>
        <div className="text-center mb-4">
          <div dangerouslySetInnerHTML={{ __html: course.description }} />
        </div>
        <div className="prose lg:prose-xl">
          <div dangerouslySetInnerHTML={{ __html: course.course }} />
        </div>
      </div>
    </div>
  );
}

export default ViewCourse;
