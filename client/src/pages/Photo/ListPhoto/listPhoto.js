import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./listPhoto.css"
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const AddPhoto = () => {
const [data, setData] = useState([])

useEffect(() => {
    getPhotos();
}, [])

const getPhotos = async () => {
    const response = await axios.get("/api/photo")
if (response.status === 200) {
    setData(response.data)
}
}

const onDeletPhoto = async(id) => {
    if(
        window.confirm('Are you sure that you wanted to delete thet photo')){
        const response = await axios.delete(`/api/photo/${id}`);
        if(response.status === 200) {
            toast.success(response.data);
            getPhotos();
        }
    }
}

console.log('dataa', data )
    return( 
        <div >
            <h1 className="mb-8 text-3xl text-center">List Photo </h1>

            <Link to= "/addPhoto" >
             <button className='btn btn-add' > Add Photo</button>
            </Link>
         <table className='styled-table'> 
         <thead>
             <tr>
                 <th style={{textAlign: "center"}}> Numero Photo </th>
                 <th style={{textAlign: "center"}}> Height </th>
                 <th style={{textAlign: "center"}}> Lenght </th>
                 <th style={{textAlign: "center"}}> Action</th>
             </tr>
         </thead>
         <tbody>
             {data && data.map((item,index) => {
                 return(
                     <tr key={index}>
                         <th scope='row'> {index+1} </th>
                         <td> {item.height}</td>
                         <td> {item.lenght}</td>
                         <td>
                             <Link to={`/update/${item.id}`} >
                                 <button className='btn btn-edit' > Edit</button>
                             </Link>
                             <button className='btn btn-delete' onClick={()=> onDeletPhoto(item.id)}> Delete</button>
                             <Link to={`/view/${item.id}`} >
                                 <button className='btn btn-view' > View</button>
                             </Link>
                         </td>
                     </tr>
                 )
             })}
         </tbody>
         </table>
   </div>
    )};

export default AddPhoto;