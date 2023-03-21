import React from "react";
import Navbar from "../navbar";
import sport from "./sports.json";
import './sports.css';
function Sports(){
    return(
        <><br/>
          <Navbar/>
          <h1>Sports News</h1> 
          {
            sport.map((data)=>(
              <div className="sport_header" key={data.id}>
                <div className="sport_left">
                  <h3>{data.title}</h3>
                  <h5>{data.author}</h5>
                  <h6>{data.publishedAt}</h6>
                  <p>{data.content}</p>
                  <i>{data.description}</i>
                </div>
                <div className="sport_right">
                   <img src={data.urlToImage} alt="images"/>
                   <a href={data.url}>READ MORE</a>
                </div>
              </div>
            ))
           }      
        </>
    )
}
export default Sports