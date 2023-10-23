import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
  student: [],
};

// First, create the thunk
export const fetchPosts = createAsyncThunk(
  'student/FetchPosts',
  async (payload, thunkAPI) => {

    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await reponse.json();
    console.log("result", result);
    console.log("thunk.API", thunkAPI)

    
   return result.slice(0,10)
    ;
    
  }
);

 const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: (state, action) => {
        
      state.todos.push(action.payload);
    
  },
  deleteStudent: (state, action) => {
        
    state.phonebooks = state.phonebook.filter((phonebook) => phonebook.id != action.payload );
  
},
extraReducers: (buider) => {
  buider.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log(state, action);
      state.posts = action.payload;
  })
  
}
  },
  
});

// Action creators are generated for each case reducer function
export const { addStudent } = studentSlice.actions

const studentReducer = studentSlice.reducer;

export default studentReducer;