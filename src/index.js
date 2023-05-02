import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import sdata from "./sdata";

// console.log(sdata[0]);

function ncard(val){
  console.log(val); 
  
}

ReactDOM.render( 
  <>
  <h1 className="heading_style"> List of top 5 Netflix Series in 2022 </h1>

    {sdata.map((val,index) => {
      console.log(index);
      return(
    <Card 
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}  
    />  
  );
    })} 
  </>,  
  document.getElementById('root'));

  