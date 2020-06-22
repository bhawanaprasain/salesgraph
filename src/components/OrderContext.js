import React from 'react';

const OrderContext = React.createContext({
    orders : [],
    itemsInCart: [],
    setItemsInCart: ()=>{},
    setOrder:()=>{},

});


export default OrderContext ;