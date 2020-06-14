import React from 'react'
import MobileList from "../utils/MobileList"
import mobileimg from "../images/mobile.jpg"
import "../styles/mobile.css"

 function Mobiles() {
            
          
     
    return (
      
            <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                {MobileList.samsung.map(mobile=>{
                   return(
                        <div className="col-md-5 eachmobile" align="center">

                            <div className="upper-portion">
                                <img className="mobileimg" src={mobileimg}></img>
                            </div>
                            <div className="lower-portion">
                                <h1 >{mobile.name}</h1>
                                <p>{mobile.price}</p>
                                <div>
                                    <input placeholder="Number of items"/>
                                </div>
                                <button className>Order</button>
                            </div>
                        </div>
                        )
                    })}
            </div>

            <div className="row d-flex justify-content-center">
                {MobileList.oppo.map(mobile=>{
                   return(
                        <div className="col-md-5 eachmobile" align="center">

                            <div className="upper-portion">
                                <img className="mobileimg" src={mobileimg}></img>
                            </div>
                            <div className="lower-portion">
                                <h1 >{mobile.name}</h1>
                                <p>{mobile.price}</p>
                                <div>
                                    <input placeholder="Number of items"/>
                                </div>
                                <button className>Order</button>
                            </div>
                        </div>
                        )
                    })}
            </div>

            <div className="row d-flex justify-content-center">
                {MobileList.huawei.map(mobile=>{
                   return(
                        <div className="col-md-5 eachmobile" align="center">

                            <div className="upper-portion">
                                <img className="mobileimg" src={mobileimg}></img>
                            </div>
                            <div className="lower-portion">
                                <h1 >{mobile.name}</h1>
                                <p>{mobile.price}</p>
                                <div>
                                    <input placeholder="Number of items"/>
                                </div>
                                <button className>Order</button>
                            </div>
                        </div>
                        )
                    })}
            </div>

            <div className="row d-flex justify-content-center">
                {MobileList.redmi.map(mobile=>{
                   return(
                        <div className="col-md-5 eachmobile" align="center">

                            <div className="upper-portion">
                                <img className="mobileimg" src={mobileimg}></img>
                            </div>
                            <div className="lower-portion">
                                <h1 >{mobile.name}</h1>
                                <p>{mobile.price}</p>
                                <div>
                                    <input placeholder="Number of items"/>
                                </div>
                                <button className>Order</button>
                            </div>
                        </div>
                        )
                    })}
            </div>
            </div>
  
    )
}

export default Mobiles