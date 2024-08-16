import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosIntance";
import { SiG2 } from "react-icons/si";




export const singUpRequest= createAsyncThunk(
    "auth/singUpRequest",
    async({userData,navigate},{rejectWithvalue})=>{
        try {
            const{data}=await axiosInstance.post("./register",userData)
            localStorage.setItem("auth", JSON.stringify(data))

            navigate("/");
            return data;

        } catch (error) {
            rejectWithvalue(error)
            
        }
    }
);
export const sigInUpRequest= createAsyncThunk(
    "auth/sigInUpRequest",
    async({userData,navigate},{rejectWithvalue})=>{
        try {
            const{data}=await axiosInstance.post("./auth",userData)
            localStorage.setItem("auth", JSON.stringify(data))

            navigate("/");
            return data;

        } catch (error) {
            rejectWithvalue(error)
            
        }
    }
);
export default sigInUpRequest