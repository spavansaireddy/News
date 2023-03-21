import React from "react";
import Navbar from "../navbar";
import busin from './business.json';
import './business.css';
function Business(){
    return(
        <><br/>
          <Navbar/>
          <h1>Business News</h1>
          {
            busin.map((data)=>(
              <div className="business_header" key={data.id}>
                <div className="business_left">
                  <h3>{data.title}</h3>
                  <h5>{data.author}</h5>
                  <h6>{data.publishedAt}</h6>
                  <p>{data.content}</p>
                  <i>{data.description}</i>
                </div>
                <div className="business_right">
                   <img src={data.urlToImage} alt="images"/>
                   <a href={data.url}>READ MORE</a>
                </div>
              </div>
            ))
           }
        </>
    )
}
export default Business