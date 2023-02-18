import { createSlice } from "@reduxjs/toolkit";
import { OFFSET } from "./config";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage: (state, action) => {
            state.messages.slice(OFFSET, 1);
            state.messages.push(action.payload);
        }
    }
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;