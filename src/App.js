import './App.css';
import React from 'react';

let list1 = ["I", "Everyone", "All y'all", "Nice people"];
let list2 = ["love", "enjoy", "revere", "celebrate", "worship", "lick"];
let list3 = ["Jen", "cats", "foxes", "pandas", "turtles"];

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <nav>
          <ul>
            <li><a href = "#">Page 2</a></li>
          </ul>
        </nav>
          <header className="App-header">
            <span>
             <p id="list1">
                List 1
              </p>
              <p id="list2">
                List 2
              </p>
              <p id="list3">
                List 3
              </p>
            </span>
            <span>
              <button type="button" onClick={() => {this.getListReturn(1)}}> Subject </button>
              <button type="button" onClick={() => {this.getListReturn(2)}}> Verb </button>
              <button type="button" onClick={() => {this.getListReturn(3)}}> Loved </button>
            </span>
          </header>
      </div>
    );
  }
  componentDidMount(){
    this.getListReturn(1);
    console.log("I love Jen");
    this.getListReturn(2);
    console.log("Jen is best");
    this.getListReturn(3);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  getListReturn(selected){
    if(selected === 1){
      document.querySelector("#list1").innerText = list1[this.getRandomInt(list1.length)];
     }
    else if(selected === 2){
      document.querySelector("#list2").innerText = list2[this.getRandomInt(list2.length)];
    }
    else if(selected === 3){
      document.querySelector("#list3").innerText = list3[this.getRandomInt(list3.length)];
    }
  }
}
