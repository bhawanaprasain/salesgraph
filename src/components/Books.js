import React from 'react'
import BooksList from "../utils/BooksList"
import bookimg from "../images/book.jpg"
import "../styles/book.css"

 function Books() {
            
            console.log(BooksList.kids);
     
    return (
      
            <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                {BooksList.kids.map(book=>{
                   return(
                        <div className="col-md-5 eachbook" align="center">

                            <div className="upper-portion">
                                <img className="bookimg" src={bookimg}></img>
                            </div>
                            <div className="lower-portion">
                                <h1 >{book.name}</h1>
                                <p>{book.price}</p>
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
                {BooksList.realStories.map(book=>{
                   return(
                        <div className="col-md-5 eachbook" align="center">

                            <div className="upper-portion">
                                <img className="bookimg" src={bookimg}></img>
                            </div>
                            <div className="lower-portion">
                                <h1 >{book.name}</h1>
                                <p>{book.price}</p>
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
                {BooksList.fiction.map(book=>{
                   return(
                        <div className="col-md-5 eachbook" align="center">

                            <div className="upper-portion">
                                <img className="bookimg" src={bookimg}></img>
                            </div>
                            <div className="lower-portion">
                                <h1 >{book.name}</h1>
                                <p>{book.price}</p>
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
                {BooksList.biogarphy.map(book=>{
                   return(
                        <div className="col-md-5 eachbook" align="center">

                            <div className="upper-portion">
                                <img className="bookimg" src={bookimg}></img>
                            </div>
                            <div className="lower-portion">
                                <h1 >{book.name}</h1>
                                <p>{book.price}</p>
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

export default Books