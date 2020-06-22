import React, {useState,useContext} from 'react'
import BooksList from "../utils/BooksList"
import bookimg from "../images/book.jpg"
import swal from 'sweetalert';
import "../styles/book.css"
import $ from "jquery"
import OrderContext from './OrderContext'

const quantityRegex = RegExp(/^\d*$/)
 function Books() {
    const [quantity, setQuantity] = useState()
    const [quantityError, setQuantityErr]= useState("")
    const {orders, setOrder}  = useContext(OrderContext)
    const {itemsInCart, setItemsInCart} = useContext(OrderContext)

    const noOfQuantity=(e)=>{
        const {value} = e.target
        setQuantity(value)
        setQuantityErr(quantityRegex.test(value)?"":"Quantity cannot be string")
    }

    const handleOrder = (category,id, name, price, quantity)=>{
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
                    console.log(orders);
                    console.log(itemsInCart)
                    itemsInCart.push(currentItem.name)
                    setItemsInCart(itemsInCart=>itemsInCart)

                }
                else{
                    if(itemsInCart.includes(currentItem.name)){
                        var idx = itemsInCart.indexOf(currentItem.name)
                        orders[idx].quantity = Number(orders[idx].quantity)+Number(currentItem.quantity)
                        setOrder(orders=>orders)
                        console.log(orders);
                        console.log(itemsInCart)
                    }
                else{
                    console.log("new one")
                    itemsInCart.push(currentItem.name)
                setItemsInCart(itemsInCart=>itemsInCart)

                    orders.push(currentItem)
                    setOrder(orders=>orders)
                    console.log(orders);
                    console.log(itemsInCart)
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
                        {BooksList.kids.map(book=>{
                        return(
                                <div className="col-md-5 eachbook" key={book.id}  align="center">
                                    <div className="upper-portion">
                                        <img className="bookimg" src={bookimg}></img>
                                    </div>
                                    <div className="lower-portion">
                                        <h1 >{book.name}</h1>
                                        <p>{book.price}</p>
                                        <div>
                                            <input onChange={noOfQuantity}  placeholder="Number of items"/>
                                            {quantityError.length>0 && (
                                                <div className="m-auto col-6 error" id={book.id}   ></div>
                                            )}
                                        </div>
                                        <button className="order-btn" id={book.name} className={book.name}  onClick={()=>handleOrder("kids",book.id,book.name,book.price, quantity)}>Order</button>
                                    </div>
                                </div>
                                )
                            })}
                    </div>

                    <div className="row d-flex justify-content-center">
                        {BooksList.realStories.map(book=>{
                        return(
                                <div className="col-md-5 eachbook" key={book.id} align="center">
                                    <div className="upper-portion">
                                        <img className="bookimg" src={bookimg}></img>
                                    </div>
                                    <div className="lower-portion">
                                        <h1 >{book.name}</h1>
                                        <p>{book.price}</p>
                                        <div>
                                            <input onChange={noOfQuantity} placeholder="Number of items"/>
                                            {quantityError.length>0 && (
                                                <div className="m-auto col-6 error" id={book.id}></div>
                                            )}
                                        </div>
                                        <button onClick={()=>handleOrder("realstories",book.id,book.name,book.price, quantity)}>Order</button>
                                    </div>
                                </div>
                                )
                            })}
                    </div>

                    <div className="row d-flex justify-content-center">
                        {BooksList.fiction.map(book=>{
                        return(
                                <div className="col-md-5 eachbook" key={book.id} align="center">
                                    <div className="upper-portion">
                                        <img className="bookimg" src={bookimg}></img>
                                    </div>
                                    <div className="lower-portion">
                                        <h1 >{book.name}</h1>
                                        <p>{book.price}</p>
                                        <div>
                                            <input onChange={noOfQuantity} placeholder="Number of items"/>
                                            {quantityError.length>0 && (
                                                <div className="m-auto col-6 error" id={book.id}></div>
                                            )}
                                        </div>
                                        <button onClick={()=>handleOrder("fiction",book.id,book.name,book.price, quantity)}>Order</button>
                                    </div>
                                </div>
                                )
                            })}
                    </div>

                    <div className="row d-flex justify-content-center">
                        {BooksList.biogarphy.map(book=>{
                        return(
                                <div className="col-md-5 eachbook" key={book.id} align="center">
                                    <div className="upper-portion">
                                        <img className="bookimg" src={bookimg}></img>
                                    </div>
                                    <div className="lower-portion">
                                        <h1 >{book.name}</h1>
                                        <p>{book.price}</p>
                                        <div>
                                            <input onChange={noOfQuantity} placeholder="Number of items"/>
                                            {quantityError.length>0 && (
                                                <div className="m-auto col-6 error" id={book.id}></div>
                                            )}
                                        </div>
                                        <button onClick={()=>handleOrder("biography",book.id,book.name,book.price, quantity)}>Order</button>
                                    </div>
                                </div>
                                )
                            })}
                    </div>
            </div>
    )
}

export default Books