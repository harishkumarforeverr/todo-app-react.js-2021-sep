import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from "./components/IndecisionApp";
 
var appRoot=document.getElementById("app");

ReactDOM.render(<IndecisionApp options={["i","am","harish"]}/>, appRoot);

