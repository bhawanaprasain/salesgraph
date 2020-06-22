import React , {useState, useContext} from 'react'
import MobileList from "../utils/MobileList"
import mobileimg from "../images/mobile.jpg"
import swal from 'sweetalert';
import OrderContext from "./OrderContext"
import "../styles/mobile.css"
import $ from "jquery"

const quantityRegex = RegExp(/^\d*$/)
 function Mobiles() {
    const [quantity, setQuantity] = useState()
    const [quantityError, setQuantityErr]= useState("")
    const {orders, setOrder}  = useContext(OrderContext)
    const {itemsInCart, setItemsInCart} = useContext(OrderContext)

     const noOfQuantity=(e)=>{
        const {value} = e.target
        setQuantity(value)
        setQuantityErr(quantityRegex.test(value)?"":"Quantity cannot be string")
     }

    const handleOrder = (category,id, name, price,quantity)=>{
        if(quantityRegex.test(quantity)){
            var currentItem = {
                "category":category,
                "name":name,
                "price":price,
                "quantity":quantity,
            }
            swal({
                title: "Added to cart",
                text: `Item: ${name} Quantity: ${quantity}`,
                buttons:{
                confirm:{text:'OK',className:'sweet-warning'},
                }
            
            })

            if(orders.length <1){
                orders.push(currentItem)
                setOrder(orders=>orders)
                itemsInCart.push(currentItem.name)
                setItemsInCart(itemsInCart=>itemsInCart)
            }
            else{
               if(itemsInCart.includes(currentItem.name)){
                    var idx = itemsInCart.indexOf(currentItem.name)
                    orders[idx].quantity = Number(orders[idx].quantity)+Number(currentItem.quantity)
                    var updatedorder = orders
                    setOrder(updatedorder)
               }
                else{
                    itemsInCart.push(currentItem.name)
                    setItemsInCart(itemsInCart=>itemsInCart)
                    orders.push(currentItem)
                    setOrder(orders=>orders)
                }
            }
        }
        else{
            quantity === undefined?setQuantityErr("Quantity cannot be empty"):setQuantityErr("Quantity cannot be string")
            $(`<p class="someelement">${quantityError}</p>`).appendTo(`#${id}`);
            $(`#${id}`).css("visibility", "visible");
        }
    }
     
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                {MobileList.samsung.map(mobile=>{
                   return(
                        <div className="col-md-5 eachmobile" key={mobile.id} align="center">
                            <div className="upper-portion">
                                <img className="mobileimg" src={mobileimg}></img>
                            </div>
                            <div className="lower-portion">
                                <h1 >{mobile.name}</h1>
                                <p>{mobile.price}</p>
                                <div>
                                    <input onChange={noOfQuantity} placeholder="Number of items"/>
                                    {quantityError.length>0 && (
                                        <div className="m-auto col-6 error" id={mobile.id} ></div>
                                    )}
                                </div>
                                <button onClick={()=>handleOrder("samsung",mobile.id,mobile.name,mobile.price, quantity)} >Order</button>
                            </div>
                        </div>
                        )
                    })}
            </div>

            <div className="row d-flex justify-content-center">
                {MobileList.oppo.map(mobile=>{
                   return(
                        <div className="col-md-5 eachmobile" key={mobile.id} align="center">
                            <div className="upper-portion">
                                <img className="mobileimg" src={mobileimg}></img>
                            </div>
                            <div className="lower-portion">
                                <h1 >{mobile.name}</h1>
                                <p>{mobile.price}</p>
                                <div>
                                    <input onChange={noOfQuantity} placeholder="Number of items"/>
                                    {quantityError.length>0 && (
                                        <div className="m-auto col-6 error" id={mobile.id}></div>
                                    )}
                                </div>
                                <button onClick={()=>handleOrder("oppo",mobile.id,mobile.name,mobile.price, quantity)}>Order</button>
                            </div>
                        </div>
                        )
                    })}
            </div>

            <div className="row d-flex justify-content-center">
                {MobileList.huawei.map(mobile=>{
                   return(
                        <div className="col-md-5 eachmobile" key={mobile.id} align="center">
                            <div className="upper-portion">
                                <img className="mobileimg" src={mobileimg}></img>
                            </div>
                            <div className="lower-portion">
                                <h1 >{mobile.name}</h1>
                                <p>{mobile.price}</p>
                                <div>
                                    <input onChange={noOfQuantity} placeholder="Number of items"/>
                                    {quantityError.length>0 && (
                                        <div className="m-auto col-6 error" id={mobile.id}></div>
                                    )}
                                </div>
                                <button onClick={()=>handleOrder("huawei",mobile.id,mobile.name,mobile.price, quantity)}>Order</button>
                            </div>
                        </div>
                        )
                    })}
            </div>

            <div className="row d-flex justify-content-center">
                {MobileList.redmi.map(mobile=>{
                   return(
                        <div className="col-md-5 eachmobile" key={mobile.id} align="center">
                            <div className="upper-portion">
                                <img className="mobileimg" src={mobileimg}></img>
                            </div>
                            <div className="lower-portion">
                                <h1 >{mobile.name}</h1>
                                <p>{mobile.price}</p>
                                <div>
                                    <input onChange={noOfQuantity}  placeholder="Number of items"/>
                                    {quantityError.length>0 && (
                                        <div className="m-auto col-6 error" id={mobile.id}></div>
                                    )}
                                </div>
                                <button onClick={()=>handleOrder("redmi",mobile.id,mobile.name,mobile.price, quantity)}>Order</button>
                            </div>
                        </div>
                        )
                    })}
            </div>
        </div>
  
    )
}

export default Mobiles