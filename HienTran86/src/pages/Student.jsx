import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuidv4, validate } from 'uuid';
import { createRoutesFromChildren } from 'react-router-dom';
import { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React, { useState } from 'react';
import { addStudent } from '../store/reducers/student';




const AddStudentForm = () => {
  const [formData, setFormData] = useState({ name: '', course: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(addStudent({ id: Date.now(), ...formData }));
    setFormData({ name: '', course: '' });
  };

 




  return (
    
    <div>
      <h2>Add Student</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};



export default AddStudentForm