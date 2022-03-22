import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify"

const initialState = {
    height: "",
    lenght: "",
}

const UpdatePhoto = () => {
    const [state, setState] = useState(initialState);
    const {height, lenght } = state
    const {id}= useParams();
    useEffect(() => {
    if(id){
        getPhoto(id)
    }
    }, [id])
    
    const getPhoto = async  (id) => {
        const response = await axios.delete(`/api/photo/${id}`);
        if(response.status === 200) {
           setState({...response.data[0]})
        }
    
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
            if (!id){
                updatePhoto(state, id)
            }

        }
    
    const handleInputChange = (e) => {
        let {name, value } = e.target;
        setState({
            ...state, [name] : value
        })
    }
    const  updatePhoto =  async (data, id) => {
        const response = await axios.put(`/api/photo/${id}`, data);
        if (response.status === 200) {
            toast.success(response.data)
        }
    }
    return (
    <div>
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
            <input type="submit" value=" Update" />
        </form>
    </div>
    );
}
export default UpdatePhoto;