import React from "react";
import Navbar from "../navbar";
import entertain from './enter.json';
import './enter.css';
function Entertainment(){
    return(
        <><br/>
          <Navbar/>
          <h1>Entertainment News</h1>
          {
            entertain.map((data)=>(
              <div className="entertain_header" key={data.id}>
                <div className="entertain_left">
                  <h3>{data.title}</h3>
                  <h5>{data.author}</h5>
                  <h6>{data.publishedAt}</h6>
                  <p>{data.content}</p>
                  <i>{data.description}</i>
                </div>
                <div className="entertain_right">
                   <img src={data.urlToImage} alt="images"/>
                   <a href={data.url}>READ MORE</a>
                </div>
              </div>
            ))
           }
        </>
    )
}
export default Entertainment