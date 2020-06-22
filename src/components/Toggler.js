import React ,{useState}from 'react'
import {Link } from "react-router-dom"
import Books from "./Books"
import Mobiles from "./Mobiles"

function Toggler(props) {
  var [viewMobiles, setMobiles] = useState(true)
   
    const handleMobile =()=>{
      setMobiles(viewMobiles=true)
    }
    const handleBook=()=>{
      setMobiles(viewMobiles=false)
    }
   
    return (
        <div>
            <div className="container-fluid">
                <div className="row togglebtns">
                    <div className="left">
                        <button className="type1" onClick={handleMobile}>Mobile store</button>
                        <button className="type1" onClick={handleBook} >Book store</button>
                    </div>
                    <div className="right">
                        <button className="type2" onClick={props.handleCart} >View Cart</button>
                        <Link to="/">
                          <button className="type2 exit" >Exit</button>
                        </Link>
                    </div>
                </div>
         </div>
          {viewMobiles? <Mobiles orders={props.orders} itemsInCart={props.itemsInCart}/>:<Books orders={props.orders} itemsInCart={props.itemsInCart}/>}
        </div>
    )
}


export default Toggler