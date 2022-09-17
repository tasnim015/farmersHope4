import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons'

const PdInfo = ({product}) => {
    const handleProductDelete=(productId)=>{

        if(window.confirm('are you sure you want to delete this product?')===true){
            fetch('http://localhost:8080/products',{
                method:'DELETE',
                headers:{
                    'content-type':'application/json'
                },
             body:JSON.stringify({productId})
            }).then(res=>res.json()).then(data=>{
                if(data.acknowledged){
                    alert('product Deleted');
                }else{
                alert('something went wrong');
                }
            });
        }
    }
  return (
    <div className='px-3 py-1 bg-slate-300 border grid grid-cols-5'>
       <h3>{product.key}</h3>
       <h3>{product.name}</h3>
       <h3>{product.price}</h3>
       <h3>{product.rating? product.rating : 'not rating yet'}</h3>
       <button  onClick={()=> handleProductDelete(product._id)}>  <FontAwesomeIcon style={{color:'red',fontSize:'18px',cursor:'pointer'}} icon={faTrash} /></button>
    </div>
  )
}

export default PdInfo