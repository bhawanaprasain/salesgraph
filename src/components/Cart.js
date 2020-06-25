import React , {useState, useEffect, useContext} from 'react'
import "../styles/cart.css"
import swal from 'sweetalert';
import axios from "axios"
import "../styles/buyer.css"
import $ from "jquery"
import OrderContext from "./OrderContext"


 function Cart(props) {
    const {orders, setOrder}  = useContext(OrderContext)
    const {itemsInCart, setItemsInCart} = useContext(OrderContext)
    const [nameError , setNameError] = useState("")
    const [phoneError , setPhoneError] = useState("")
    const [emailError , setEmailError] = useState("")
    const [fullname, setName] = useState("")
    const [phone , setPhone] = useState("")
    const [email , setEmail] = useState("")
    const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const phoneRegex = RegExp(/^\d{10}$/)
    const formValid  = (nameError,phoneError, emailError,fullname,phone, email) =>{
        if(fullname === "" || email === "" || phone === "" ||
            nameError.length>0 || phoneError.length>0 || emailError.length>0  ){
            return true
        }
        else{
            return false
        }
    }
 useEffect(() => {
   
 }, [orders])

   $(document).ready(function(){
    $(".order").click(function(){
        $(".buyer").slideDown("slow")
    })
    $(".order").dblclick(function(){
        $(".buyer").slideUp("slow")
    })
   })

   const deleteItem =(ordereditem)=>{
    const updatedorder = orders.filter(item=> item !== ordereditem)
    setOrder(updatedorder)
    const updateditems = itemsInCart.filter(item=> item !== ordereditem.name)
    setItemsInCart(updateditems)
}



const editItem= (item)=>{
    var idx = orders.indexOf(item)
    console.log(idx)
    swal({
      text: `Enter the required  quantity for : ${item.name}`,
      content: "input",
      buttons: {
        cancel: "Cancel",
        confirm: {
          text: "Confirm",
          className:'sweet-warning'
        }
      }
     
    })
    .then((value) => {
      if(value){
        var itemToBeInserted ={
            "category":item.category,
            "name":item.name,
            "price":item.price,
            "quantity": value
        }

        const insert = (arr, index, newItem) => [
        ...arr.slice(0, index),
        newItem,
        ...arr.slice(index+1)
        ]
        const result = insert(orders, idx, itemToBeInserted)
        setOrder(result)
        swal({
          text: `Your cart has been edited`,
          icon:"success",
          buttons:{
            confirm:{text:'OK',className:'sweet-warning'},
          }
        }) 
      }
      else{
        swal({
          text: `Cancelled`,
          icon:"error",
          buttons:{
            confirm:{text:'OK',className:'sweet-warning'},
          }
            })   
            }
        });
    }


  
    const handleOnChange =(e)=>{
        var {name, value} = e.target
        switch(name){
            case "name":
                setName(value)
                setNameError((value.length<3 )?"minimum 3 characters required":"")
                break
            case "phone":
                setPhone(value)
                setPhoneError(phoneRegex.test(value)?"":"Invalid phone number")
                break
            case "email":
                setEmail(value)
                setEmailError(emailRegex.test(value) ?"":"Invalid Email")
                break
            default:
                break
        }
    }

    const handleSubmit=()=>{
        if (orders.length <1){
            swal({
                title: "Cart is empty",
                text: `Add items to cart before ordering`,
                buttons:{
                confirm:{text:'OK',className:'sweet-warning'},
                }
            }) 
        }
       else{
           if(formValid(nameError,phoneError,emailError, fullname,phone, email)){
            swal({
                title: "Invalid details",
                text: `Please refill your details`,
                buttons:{
                confirm:{text:'OK',className:'sweet-warning'},
                }
            })
           }
           else{
            var huwaei = orders.filter(item=> item.category === "huawei")
            var samsung = orders.filter(item=> item.category === "samsung")
            var redmi = orders.filter(item=> item.category === "redmi")
            var oppo = orders.filter(item=> item.category === "oppo")
            var kids = orders.filter(item=> item.category === "kids")
            var realStories = orders.filter(item=> item.category === "realStories")
            var biography = orders.filter(item=> item.category === "biography")
            var fiction = orders.filter(item=> item.category === "fiction")
            var orderData ={
                huwaei,samsung,redmi,oppo,kids,realStories,biography,fiction
            }
            swal({
                title: "Thank you",
                text: `We will deliver soon`,
                icon:"success",
                buttons:{
                confirm:{text:'OK',className:'sweet-warning'},
                }
            })
            
            axios.post("http://localhost:4000/order/details", orderData).then((response)=>{
                console.log(response);
               swal({
                    title: "Thank you",
                    text: `We will deliver soon`,
                    icon:"success",
                    buttons:{
                    confirm:{text:'OK',className:'sweet-warning'},
                    }
                })
            })
            .catch(function(error){
                alert(error)
            })
                 
          
           }
       } 
    }

    return (
            <div className="allorders">
                <div className="row m-auto eachorder tablehead">
                    <div className="col-md-2  ">Name</div>
                    <div  className="col-md-2" >Price</div>
                    <div  className="col-md-1" >Quantity</div>
                    <div  className="col-md-2 offset-md-1 " >Edit</div>
                    <div  className="col-md-2 ">Delete</div>
                </div>
                {orders.map((ordereditem, index)=>{
                    return(
                        <div className="row m-auto eachorder details" >
                            <div className="col-md-2 name">{ordereditem.name}</div>
                            <div  className="col-md-2 price" >{ordereditem.price}</div>
                            <div  className="col-md-1 quantity">{ordereditem.quantity}</div>
                            <button  className="col-md-2 offset-md-1 edit" onClick={()=>editItem(ordereditem)}>Edit</button>
                            <button  className="col-md-2 delete"  onClick={()=>deleteItem(ordereditem)}>Delete</button>
                        </div>
                    )
                })}
                <div className="row m-auto orderbtns">
                    <button className="type2 " onClick={props.handleCart} >Add more</button>
                    <button className="type2 order">place order</button>
                </div>
                
                <div className="buyer">
                    <div className="row ip ">
                        <input className="m-auto col-lg-8 col-md-10" type="text" placeholder="Name" name="name" onChange={handleOnChange}></input>
                        {nameError.length>0 && (
                            <div className="m-auto col-6 error">{nameError}</div>
                        )}
                    </div>
                   
                    <div className="row ip ">
                        <input className="m-auto col-lg-8 col-md-10"  placeholder="Email" name="email" onChange={handleOnChange}></input>
                        {emailError.length>0 && (
                            <div className="m-auto col-6 error">{emailError}</div>
                        )}
                    </div>
                    <div className="row ip ">
                        <input className="m-auto col-lg-8 col-md-10" placeholder="Phone Number" name="phone" onChange={handleOnChange}></input>
                        {phoneError.length>0 && (
                            <div className="m-auto col-6 error">{phoneError}</div>
                        )}
                    </div>
                    <div className="row ip ">
                        <button className="m-auto" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
    )
}

export default Cart