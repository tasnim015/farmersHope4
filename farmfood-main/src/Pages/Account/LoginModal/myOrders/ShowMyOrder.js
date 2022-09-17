
import React, { useState } from 'react';
import Rating from 'react-rating';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const ShowMyOrder = ({myPd}) => {

    const [open, setOpen] = useState(false);
    const [rating,setRating]=useState(5);
    const [feedback,setFeedback]=useState('');

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    // const handleRatingSubmit=(id)=>{
    //     fetch(`http://localhost:8080/products/${id}`,{
    //         method:'PUT',
    //         headers:{
    //             'content-type':'application/json'
    //         },
    //         body:JSON.stringify({rating,feedback})
        
    //       }).then(res=>res.json()).then(data=>{
    //         if(data.acknowledged){
    //             alert('rating done')
    //             onCloseModal();
    //         }
    //     })
    // }
 
    return (
        <div className="grid grid-cols-3 my-3 text-center border-2 border-black ">
            <h2 className='py-5 px-5 '> Product ID : {myPd.productId}</h2>
            <h2 className='py-5 px-5 '> Product Name : {myPd.productName}</h2>
            <h2 className='py-5 px-5 '>Quantity : {myPd.productQuantity}</h2>
            {/* <button onClick={onOpenModal} className='bg-yellow-400 w-28 h-9 mt-5'>Write a review</button>
            <Modal  open={open} onClose={onCloseModal} center>
        <h2>Write a Review</h2>
        <br /> <hr /> 
        <h4 className='text-center'>{myPd.productName}</h4> <br />
        <br />
        Rate : <Rating
        fractions={2}
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        
         onChange={(rate) => setRating(rate)}
            />
            <br /> <br />

        <textarea onBlur={(e)=>setFeedback(e.target.value)} className='border-2' name="" id="" cols="50" rows="8"></textarea> <br /><br />
        <button className='bg-yellow-400' onClick={()=>handleRatingSubmit(myPd.productId)}>Submit</button>
      </Modal> */}

        </div>
    );
};

export default ShowMyOrder;