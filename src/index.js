import React from "react";
import ReactDOM from "react-dom/client";

// const createdElement = (
//   <h1>
//     <span>Hi</span>
//     <br></br>
//     <span>Hello</span>
//   </h1>
// );
function Header() {
  return <header>
    <span>Hello</span>
    <ul>
      <li>Home</li>
    </ul>
  </header> 
}
function Footer() {
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);
