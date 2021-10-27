// import logo from "./logo.svg";
// import "./App.css";
// alert(1)
// function App() {
//   return (
//     <div className="App">
//         <h1>hi</h1>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code> src / App.js </code> and save to reload.{" "}
//         </p>{" "}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>{" "}
//       </header>{" "} */}
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import ReactDOM from 'react-dom';

// const myArray = ['apple', 'banana', 'orange'];

// const myList = myArray.map((item) => <p>{item}</p>)

// ReactDOM.render(myList, document.getElementById('root'));




/**
 * I use this code to modified the functionalities
 * I have added the buttons and i have use the custom tag (Button)
 * I have created the separate Button file for custom buttons.
 * See the import,export and Button.jsx file. You know how it working.(Ash and arun thought you on 27.10.21.- also see notes)
 */

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Button from './Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button width="800"></Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React <Button width="100"></Button>
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
           
          </a>
        </p>
      </header>
      <Button width="500"></Button>
    </div>
  )
}

export default App;