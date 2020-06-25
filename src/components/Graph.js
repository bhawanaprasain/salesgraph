import React, { useState,useEffect } from "react";
import {Bar, Line,Pie} from "react-chartjs-2"
import axios from 'axios'

export default function Graph() {
  const [bookData, setBookData] = useState([])
  const [mobileData, setMobileData] = useState([])


  useEffect( ()=>{
    const fetchData = async()=>{
      let salesOfBook = []
      let salesOfMobile = []

      await axios.get('http://localhost:4000/order/details').then((res)=>{
        res= res.data
        salesOfBook.push(res.noOfKids,res.noOfFiction,res.noOfRealStories,res.noOfBiography)
        salesOfMobile.push(res.noOfSamsung,res.noOfHuwaei, res.noOfRedmi,res.noOfOppo)

      })
      .catch((error)=>{
        console.log(error);
     });
     setBookData(salesOfBook)
     setMobileData(salesOfMobile)
     
    }
fetchData()
   
  }, [])
  const mobileChartData= {
    labels: ['Samsung', 'Huwaei', 'Redmi', 'Oppo'],
    datasets:[
      {
        label:'Mobile',
        data:mobileData,
        backgroundColor:[
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 186, 1)',
          'rgba(235, 192, 192, 1)',
          'rgba(153, 122, 255, 1)',
       
        ]
      }
    ]
  }

  const bookChartData= {
    labels: ["Kids","Fiction", "RealStories", "Biography"],
    datasets:[
      {
        label:'Book',
        data:bookData,
        backgroundColor:[
          'rgba(255, 99, 132, 1)',
          'rgba(254, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(175, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
       
        ]
      }
    ]
  }

    
  return (
    <div className="App">
     <Bar
     data={bookChartData}
     options={{
      title:{
        display:"Sales Visualization of books",
        text:"Total sales of books",
        fontSize:25
      },
      legend:{
        display:true,
        position:"bottom"
      }
    }}
     />
   
   <Bar
     data={mobileChartData}
     options={{
      title:{
        display:"Sales Visualization of mobiles",
        text:"Total sales of mobiles",
        fontSize:25
      },
      legend:{
        display:true,
        position:"bottom"
      }
    }}
     />
    </div>
  );
}
