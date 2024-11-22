
import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, persistLocalStorage } from "../../utilities/localStorage.utility";

export const UserKey = 'user';

export const userSlice = createSlice({
  name:UserKey,
  initialState:localStorage.getItem(UserKey) 
  ? JSON.parse(localStorage.getItem(UserKey)) 
  :{
    id: 0,
    name: "",
    token: "",
    email: ""
} ,
  reducers: {
    createUser: (state, action) => {
        persistLocalStorage(UserKey, action.payload);
        return action.payload;
      },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage(UserKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(UserKey);
      return {
        id: 0,
        name: "",
        token: "",
        email: "",
        role:Roles.NOT
    };
    }

  }

});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;