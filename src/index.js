import React from 'react';

import ReactDom from "react-dom";

import Card from "./components/Card"
import Collapse from './components/Collapse';
const App = () => {
  return(
    <div className="container">
      <div className="row">
      <div className="card-group w-100">
        <div className="col">
        <Collapse href="collapseExample1">
        <Card 
        cardTitle="Card 1" 
        cardText="Maybe there's a little something happening right here."
        updateTime="1 min ago."
        image="https://picsum.photos/id/123/200/300"/>
        </Collapse> </div>
        <div className="col">
        <Collapse href="collapseExample2">
        <Card 
        cardTitle="Card 2" 
        cardText="Every highlight needs it's own personal shadow." updateTime="1 min ago."
        image="https://picsum.photos/id/165/200/300"/>
        </Collapse></div>
        <div className="col">
        <Collapse href="collapseExample3">
        <Card cardTitle="Card 3" 
        cardText="Only God can make a tree - but you can paint one." updateTime="1 min ago."
        image="https://picsum.photos/id/25/200/300"/>
        </Collapse>
  
  
        </div>
      </div>
      </div>
    </div>
  )
}


ReactDom.render(
    <App/>,

    document.getElementById("root")
    
);