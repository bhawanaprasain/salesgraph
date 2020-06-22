import React , {useState} from 'react'
import swal from 'sweetalert';
import "../styles/home.css"

 function Message() {
    const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const [nameError , setNameError] = useState("")
    const [messageError , setMessageError] = useState("")
    const [emailError , setEmailError] = useState("")
    const [fullname, setName] = useState("")
    const [message , setMessage] = useState("")
    const [email , setEmail] = useState("")

    const formValid  = (nameError,messageError, emailError,fullname,message, email) =>{
        if(fullname === "" || email === "" || message === "" ||
            nameError.length>0 || messageError.length>0 || emailError.length>0  ){
            return true
        }
        else{
            return false
        }
    }
    const handleOnChange =(e)=>{
        var {name, value} = e.target
        switch(name){
            case "name":
                setName(value)
                setNameError((value.length<4 )?"minimum 3 characters required":"")
                break
            case "message":
                setMessage(value)
                setMessageError(value === undefined?"Empty message":"")
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
        if(formValid(nameError,messageError, emailError,fullname,message, email)){
            swal({
                title: "Invalid message",
                text: `Please send a valid email`,
                buttons:{
                confirm:{text:'OK',className:'sweet-warning'},
                }
            
            })
        }
        else{
            swal({
                title: "Thank you",
                text: `We will respond soon`,
                buttons:{
                confirm:{text:'OK',className:'sweet-warning'},
                }
            
            })
        }

    }
    return (
        <div>
             <div className="row message">
                   <div className="col-6 m-auto"><h1>Leave us a message</h1></div>
                   <div className="col-7 m-auto">
                       <input  onChange={handleOnChange} placeholder="Name" name="name"/>
                       {nameError.length>0 && (
                            <div className=" error">{nameError}</div>
                        )}
                   </div>
                   <div className="col-7 m-auto">
                       <input onChange={handleOnChange} placeholder="Email" name="email"/>
                       {nameError.length>0 && (
                            <div className=" error">{emailError}</div>
                        )}
                   </div> 
                   <div className="col-7 m-auto">
                       <textarea onChange={handleOnChange} placeholder="Message" name="message"/>
                       {nameError.length>0 && (
                            <div className=" error">{messageError}</div>
                        )}
                   </div>
                   <div className="col-7 m-auto">
                        <button className="send-msg" onClick={handleSubmit}>Send</button>
                   </div>
                   
               </div>
        </div>
    )
}
export default Message