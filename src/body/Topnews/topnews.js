import React from "react";
import Navbar from "../navbar";
import topnews from './topnews.json';
import './topnews.css';
function Topnews(){
    return(
        <><br/>
          <Navbar/>
          <h1>Topnews</h1>
           {
            topnews.map((data)=>(
              <div className="topnews_header" key={data.id}>
                <div className="topnews_left">
                  <h3>{data.title}</h3>
                  <h5>{data.author}</h5>
                  <h6>{data.publishedAt}</h6>
                  <p>{data.content}</p>
                  <i>{data.description}</i>
                </div>
                <div className="topnews_right">
                   <img src={data.urlToImage} alt="images"/>
                   <a href={data.url}>READ MORE</a>
                </div>
              </div>
            ))
           }
        </>
    )
}
export default Topnews