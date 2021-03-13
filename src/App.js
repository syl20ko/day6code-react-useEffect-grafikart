import React, { useState, useEffect } from "react";

function useIncrement(initial, step) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount((count) => count + step);
  };

  return [count, increment];
}

function Compteur() {
  const [count, increment] = useIncrement(0, 2);

  useEffect(() => {document.title = 'Compteur ' + count}, [count])

  return <button onClick={increment}>incrémenter {count}</button>;
}

function App() {
  return (
    <div>
      <Compteur />
    </div>
  );
}

export default App;
