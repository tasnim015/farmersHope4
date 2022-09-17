import React from 'react';

const DisplayOrderedItems = ({pd}) => {
    return (
        <div className="border px-5 py-3">
            <h2 className="text-sm py-1">Product Id : {pd.productId}</h2>
            <h2 className="text-sm py-1">Product Quantity : {pd.productQuantity}</h2>
             
        </div>
    );
};

export default DisplayOrderedItems;