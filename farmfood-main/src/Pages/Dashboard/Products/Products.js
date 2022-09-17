import React, { useEffect, useState } from 'react'
import PdInfo from '../PdInfo/PdInfo';
import { BallTriangle } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Products = () => {
    const [products,setProducts]=useState(null);
    let init=0;
    useEffect(()=>{
        const fetchProduct=async()=>{
         const result=await fetch('http://localhost:8080/products');
         const data=await result.json();
         setProducts(data);
       
        }
        fetchProduct();
     },[])

     if(products){
      for(const singlePd of products){
        if(singlePd.key > init){
            init=parseFloat(singlePd.key)
        }
      }
      localStorage.setItem('_pdkey',JSON.stringify(init));
     }

  

  return (
    <div className='px-14 mt-5'>
        <div className='grid grid-cols-5 px-3 py-1 bg-slate-500'>
            <h3>Product Key</h3>
            <h3>Product Name</h3>
            <h3>Product Price</h3>
            <h3>Product Rating</h3>
            <h3>Remove Product</h3>
        </div>
       { !products? <div className='flex mx-auto justify-center mt-9'>
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
        </div> :
        products?.map(pd=><PdInfo key={pd.key} product={pd} />)
       }
      
    </div>
  )
}

export default Products