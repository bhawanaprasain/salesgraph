import React from 'react'
import "../styles/home.css"

 function Message() {
    return (
        <div>
             <div className="row message">
                   <div className="col-6 m-auto"><h1>Leave us a message</h1></div>
                   <div className="col-7 m-auto">
                       <input  placeholder="Name" name="name"/>
                   </div>
                   <div className="col-7 m-auto">
                       <input  placeholder="Email" name="email"/>
                   </div> 
                   <div className="col-7 m-auto">
                       <textarea  placeholder="Message" name="message"/>
                   </div>
                   <div className="col-7 m-auto">
                        <button className="send-msg">Send</button>
                   </div>
                   
               </div>
        </div>
    )
}
export default Message