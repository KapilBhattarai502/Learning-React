import {createSlice}  from "@reduxjs/toolkit";
export const counterSlice =createSlice({
    name:"counter",
    initialState:{
        count:0,
    },
    reducers:{
        increaseCount:(state,action)=>{
            state.count=state.count+1;
        },
        decreaseCount:(state,action)=>{
            state.count=state.count-1;


        },
        setToZero:()=>{

        }

        }
    }
)
export const { increment, decrement, setToZero } = counterSlice.actions
export default counterSlice.reducer