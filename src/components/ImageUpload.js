import React, { useEffect } from 'react'
import Axios from 'axios'
import { useState } from 'react';

const ImageUpload = () => {
    const [imageSelected,setImageSelected]=useState("");
    const [uploadedImgURL,setUploadedImgURL]=useState('');

  const uploadImage=()=>{
    // console.log(files[0]);
    const formData=new FormData();
    formData.append("file",imageSelected);
    formData.append("upload_preset","sa3qpzmd");

    const cloudinary_Cloud_Name="dv7jje0bw";

    Axios.post(`https://api.cloudinary.com/v1_1/${cloudinary_Cloud_Name}/image/upload`,formData).then((response)=>{
      console.log(response.data);
      console.log(response.data.secure_url);
      setUploadedImgURL(response.data.secure_url);
    });
  }

  useEffect(()=>{
    console.log('Link is :',uploadedImgURL);
  },[uploadedImgURL])
  return (
    <div>
    <h1>Upload Image</h1>
     <input type="file" onChange={(e)=>{setImageSelected(e.target.files[0])}}/>
     <button onClick={()=>{uploadImage()}}>Upload Image</button>
    </div>
  )
}

export default ImageUpload