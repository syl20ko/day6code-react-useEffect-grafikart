import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState, useEffect } from "react";

function useIncrement(initial, step) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount((count) => count + step);
  };

  return [count, increment];
}

function Compteur() {
  const [count, increment] = useIncrement(0, 2);

  useEffect(() => {
    const timer = window.setInterval(() => {
      console.log("hello");
      increment();
    }, 1000);
    /* pour démonter */
    return function () {
      clearInterval(timer);
    };
  }, []);


  useEffect(() => {document.title = "Compteur " + count}, [count])

  return <button onClick={increment}>incrémenter {count}</button>;
}


ReactDOM.render(
  <div><Compteur/></div>,
    document.getElementById('root')
  );
  
