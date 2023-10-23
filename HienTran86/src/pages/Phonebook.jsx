/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuidv4, validate } from 'uuid';
import { createRoutesFromChildren } from 'react-router-dom';
import phonebookReducer, { addPhoneBook, fetchPosts } from "../store/reducers/phonebook";
import { useEffect } from 'react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addStudent } from '../store/reducers/student';





export const Phonebook = () => {
   

    const {control} = useForm({
      defaultValues: {
        name: "",
        phone: 0,
        isFavorite: true,
      },
    });

    const studentStore = useSelector(state =>state.Phonebook)

    const dispatch = useDispatch();

    const onSubmit = (values) => { 
        const payload = { ...values, id: uuidv4() };
        dispatch(addStudent(payload))
    }
  ;

    useEffect(() => {
      dispatch(fetchPosts("121321"));
    }, []);

  

  
    return (
      <div>
        <h2>Add Student</h2>
        <form>
          <Controller name="name" control={control} 
          render={({field}) => (
            <input {...field} type='text' placeholder='Name'/>
          )}/>
          <Controller name="phone" control={control} 
          render={({field}) => (
            <input {...field} type='text' placeholder='Phone'/>
          )}/>

          <Controller name="isFavorite" control={control} 
          render={({field}) => (
            <div>
              <label htmlFor=''>Favorite</label>
              <input {...field} type='checkbox' checked={field.value} />
            </div>
          )}/>

          <button type='submit'>ADD</button>
        </form>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>phone</th>
            <th>favorite</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Phonebook.phonebook.map((phonebook, index) => (
              <tr key={index}>
                <td>{phonebook.id}</td>
                <td>{phonebook.name}</td>
                <td>{phonebook.phone}</td>
                <td>{phonebook.isFavorite.toString()}</td>
                
              </tr>
            ))
          }
        </tbody>
      </table>

       
      </div>

      
    );
}

export default Phonebook