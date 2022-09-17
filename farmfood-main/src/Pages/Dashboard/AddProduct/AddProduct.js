import React, { useState, useEffect } from 'react'
import { BallTriangle } from 'react-loader-spinner';
import useIdentity from '../../../Hooks/useIdentity';

const AddProduct = () => {
    const [newProductInfo,setNewProductInfo]=useState(null);
    const [imgUrl,setImgUrl]=useState(null);
    const API_KEY="19f04dc40bf672a82c1b32f4e6260bc4";
    const [loading,setLoading]=useState(false);
    const {prokey}=useIdentity();

    const handleProductInfo=e=>{
      const name=e.target.name;
      const value=e.target.value;
      const newInputValue={...newProductInfo}
      newInputValue[name]=value;
      setNewProductInfo(newInputValue);

  
    }

    const handleImg=e=>{


       
       const image=e.target.files[0];
       const formData=new FormData();
       formData.append('image',image)
       const URL=`https://api.imgbb.com/1/upload?key=${API_KEY}`
       fetch(URL,{
        method:'POST',
        body: formData
       }).then(res=>res.json())
       .then(result=>{
        
        if(result.success){
            const img=result.data.url;
           setImgUrl(img);
        }else{
            alert('something went wrong');
        }
       })
    }

    const product_key=localStorage.getItem('_pdkey');
    const pdKey=JSON.parse(product_key);
    console.log(pdKey);

    const handleFormSubmit=e=>{
        e.preventDefault();
       
      setLoading(true)
        const productData={
            ...newProductInfo,image:imgUrl,key:parseInt(Math.random()*342938+1)
        }

        console.log('finally',prokey);

   {     fetch('http://localhost:8080/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(productData)
        
          }).then(res=>res.json()).then(data=>{
        
            if(data.acknowledged){
                setLoading(false);
                alert('product added successfully');
              
            }
            
        })}
    }
  return (
    <div className='flex mx-auto justify-center mt-20'>
       { !loading? <form onSubmit={handleFormSubmit} className='flex flex-col'>
            <input name="name" onBlur={handleProductInfo} className='my-3 border px-5 py-2' type="text" required placeholder='Product Name'/>
            <input name="description" onBlur={handleProductInfo} className='my-3 border px-5 py-2' type="text" required placeholder='Product Description'/>
            <input  onChange={handleImg} required className='my-3 border px-5 py-2' type="file" />
            <input name="price" onBlur={handleProductInfo} className='my-3 border px-5 py-2' type="number" required placeholder='Product Price'/>
            
           
            {/* <input name="deliverycharge" onBlur={handleProductInfo} className='my-3 border px-5 py-2' type="number" required placeholder='Delivery Charge'/> */}
           
        {  imgUrl?   <input name=""  className='my-3 border px-5 cursor-pointer py-2 bg-yellow-400' type="submit" /> :
             <input name=""  className='my-3 border px-5 cursor-pointer py-2 ' disabled type="loading... submit" />}
            
        </form> :

            <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
            /> 
        
        }
    </div>
  )
}

export default AddProduct