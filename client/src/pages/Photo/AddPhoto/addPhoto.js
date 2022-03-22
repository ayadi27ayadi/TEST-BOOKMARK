import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify"
import "./addPhoto.css"
const initialState = {
    height: "",
    lenght: "",
}

const AddPhoto = () => {
    const [state, setState] = useState(initialState);
    const {height, lenght } = state
    const navigate = useNavigate()
const  addPhoto =  async (data) => {
    const response = await axios.post("/api/photo/", data);
    if (response.status === 200) {
        toast.success(response.data)
    }
}

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!height || !lenght){
            toast.error("Please provide value into each input field")
        }
        else {
            addPhoto(state);
           setTimeout(() => navigate('/listPhoto'), 500)

        }
    }
    const handleInputChange = (e) => {
        let {name, value } = e.target;
        setState({
            ...state, [name] : value
        })
    }

    return (
    <div style={{ marginTop: "100px"}}>
        <form style={{ 
            margin: "auto",
            padding: "15px", 
            maxWidth: "400px",
            alignContent: "center",
        }} 
        onSubmit={handleSubmit}
        >
            <label htmlFor='name'> Height</label>
            <input type="text" id="height" placeholder='Enter Height'
            onChange={handleInputChange}
            name="height"
            value={height} />
            <label htmlFor='name'> Lenght</label>
            <input type="text" id="lenght" placeholder='Enter Lenght'
            onChange={handleInputChange}
            value={lenght}
            name="lenght" />
            <input type="submit" value="Add" />
        </form>

    </div>
    );
}

export default AddPhoto;