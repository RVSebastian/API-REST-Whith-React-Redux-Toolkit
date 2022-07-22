import { createSlice } from '@reduxjs/toolkit';
// importamos axios
import axios from 'axios';
export const userSlice = createSlice({
    name: 'usuarios',
    initialState: {
        list: []
    },
    reducers: {
        setUserList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {
axios.get('https://reqres.in/api/users?per_page=11')
.then((response) =>{
    dispatch(setUserList(response.data.data));
})
.catch((error) => console.log(error))
}