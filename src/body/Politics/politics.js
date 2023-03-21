import React from "react";
import Navbar from "../navbar";
import politics from './politics.json';
import './politics.css';
function Politics(){
    return(
        <><br/>
          <Navbar/>
          <h1>Politics News</h1>
          {
            politics.map((data)=>(
              <div className="politics_header" key={data.id}>
                <div className="politics_left">
                  <h3>{data.title}</h3>
                  <h5>{data.author}</h5>
                  <h6>{data.publishedAt}</h6>
                  <p>{data.content}</p>
                  <i>{data.description}</i>
                </div>
                <div className="politics_right">
                   <img src={data.urlToImage} alt="images"/>
                   <a href={data.url}>READ MORE</a>
                </div>
              </div>
            ))
           }
        </>
    )
}
export default Politics