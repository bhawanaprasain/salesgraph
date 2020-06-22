import React , {useState} from 'react'
import OrderContext from "./OrderContext"
import Cart from "./Cart"
import Toggler from "./Toggler"
import "../styles/purchase.css"

 function Purchase() {
  const [viewCart, setCart] = useState(false)
  const [orders, setOrder] = useState([])
  const [itemsInCart, setItemsInCart]= useState([])

  const handleCart=()=>{
    setCart(!viewCart)
  }

    return (
        <OrderContext.Provider value={{orders:orders, itemsInCart:itemsInCart, setItemsInCart:setItemsInCart, setOrder:setOrder}}>
            <div>
              {viewCart? <Cart  handleCart={handleCart} itemsInCart={itemsInCart} handleCart={handleCart}/>:<Toggler  handleCart={handleCart} />}
            </div>
        </OrderContext.Provider>
    )
}

export default Purchase