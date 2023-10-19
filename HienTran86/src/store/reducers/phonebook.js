import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
  phonebook: [],
};

// First, create the thunk
export const fetchPosts = createAsyncThunk(
  'phonebook/FetchPosts',
  async (payload, thunkAPI) => {

    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await reponse.json();
    console.log("result", result);
    console.log("thunk.API", thunkAPI)

    
   return result.slice(0,10)
    ;
    
  }
);

 const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addPhoneBook: (state, action) => {
        
      state.todos.push(action.payload);
    
  },
  deletePhonebook: (state, action) => {
        
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
export const { addPhoneBook } = phonebookSlice.actions

const phonebookReducer = phonebookSlice.reducer;

export default phonebookReducer;