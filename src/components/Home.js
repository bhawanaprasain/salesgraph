import React from 'react'
import "../styles/home.css"
import "../styles/animation.css"
import Footer from "./Footer"
import Customer from "./Customer"
import Message from './Message'
import {Link} from "react-router-dom"
import $ from "jquery"

 function Home() {
    $(document).ready(function(){
        $(".aboutlink").click(function() {
            $('html,body').animate({
                scrollTop: $(".about").offset().top},
                'slow');
       });

       $(".contactlink").click(function() {
        $('html,body').animate({
            scrollTop: $(".message").offset().top},
            2000);
   });
      
       })


    return (
        <div className="container-fluid" >
        <div className="head-section row">
           <nav className="navbar navbar-expand-md navbar-default">
               <div className="navbar-brand">SALES</div>
               <button className="navbar-toggler custom-toggler" data-toggle="collapse" data-target="#navbar-menu">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                            <Link className="nav-link contactlink">CONTACT</Link>
                    </li>
                    <li className="nav-item aboutlink">
                            <Link className="nav-link">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                            <Link to="purchase" className="nav-link">PURCHASE</Link>
                    </li>
                </ul>
               </div>
               <div className="animation-section">
                   <ul className="box-area">
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                   </ul>
               </div>
           </nav>
           </div>
            
           <div className="row description-section">
                   <div className="col-lg-6">
                       <div className="container">
                       <div className="row offset-1 heading">
                            <h1 >
                                Analayze  total sales of all products 
                            </h1>
                        </div>

                        <div className="row offset-1 desc-para">
                            <p>See the total rise and fall of sales and purchase trending items</p>
                        </div>

                        <div className="row offset-1 sales">
                        <Link to="/graph">
                            <button className="sales-btn">
                                View Sales
                            </button>
                        </Link>
                        </div>
                       </div>
                   </div>
                  <div className="col-lg-6">
                      <div className=" graph">
                      </div>
                </div>
           </div>
           <div className="row overview ">
               <div className="col-12 store-items">
                   ITEMS IN OUR STORE
               </div>
               <div className="container">
                   <div className="row">
                        <div className="col-sm-4 offset-sm-2 phone">
                            <div className="phone-details">
                                <i className="fas fa-mobile" aria-hidden="true"></i>
                                <h2>20</h2>
                                <h3>Mobile</h3>
                            </div>
                        </div>
                        <div className="col-sm-4  book">
                            <div className="book-details">
                                <i className="fas fa-book" aria-hidden="true"></i>
                                <h2>20</h2>
                                <h3>Books</h3>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
                    <div className="row about">
                    <div className="col-12">
                            <h3 className="">About sales</h3>
                        </div>
                        <div className="col-12 about-section">
                            <p >We make online shopping easier by letting people visualize trending sales. Before purchasing , get a quick overview of which products are on trend.</p>
                        </div>
                    </div>

                    <div className="row trending">
                        <div className="col-md-6 item">
                            <div className="item1">
                                <h2>HUWAEI</h2>
                                <h3>NRS 15,000</h3>
                                <p>It is the most trending mobile in our store since last month</p>
                                <p><button>Order Now</button></p>
                            </div>
                        </div>
                        <div className="col-md-6  item">
                            <div className="item2">
                                <h2>HUWAEI</h2>
                                <h3>NRS 15,000</h3>
                                <p>It is the most trending mobile in our store since last month</p>
                                <p><button>Order Now</button></p>
                            </div>
                        </div>
                        <div className="col-md-6  item">
                            <div className="item3">
                                <h2>HUWAEI</h2>
                                <h3>NRS 15,000</h3>
                                <p>It is the most trending mobile in our store since last month</p>
                                <p><button>Order Now</button></p>
                            </div>
                        </div>
                        <div className="col-md-6  item">
                            <div className="item4">
                                <h2>HUWAEI</h2>
                                <h3>NRS 15,000</h3>
                                <p>It is the most trending mobile in our store since last month</p>
                                <p><button>Order Now</button></p>
                            </div>
                        </div>
                </div>
             <Customer />
            <Message />
           <Footer />
        </div>
    )
}

export default Home