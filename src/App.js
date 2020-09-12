import React from 'react';
import './App.css';
import { Bob, Tom, TomAndBob } from './components/Screens.js';



const App = () => {
  const [selectedCat, setSelectedCat] = React.useState('');

  const handleSelection = (event) => {
    event.preventDefault();
    setSelectedCat(event.target.name);
  }
  return (
    <div>
      {selectedCat === 'Tom' ? (
        <>
          <Tom />
          <button onClick={handleSelection} name="Bob">Click to see random Bob</button>
          <button onClick={handleSelection} name="Tom and Bob">Click to see random Tom and Bob</button>
        </>
      )
        : selectedCat === "Bob" ? (
          <>

            <Bob />            
            <button onClick={handleSelection} name="Tom">Click to see random Tom</button>
            <button onClick={handleSelection} name="Tom and Bob">Click to see random Tom and Bob</button>
          </>
        )
          : selectedCat === 'Tom and Bob' ? (
            <>

              <TomAndBob />              
              <button onClick={handleSelection} name="Bob">Click to see random Bob</button>
              <button onClick={handleSelection} name="Tom">Click to see random Tom</button>
            </>
          ) : (
              <>
              <h1>      Let's be real.  This year's been hard.  You know what helps?  Random cats.
</h1>
                <button onClick={handleSelection} name="Bob">Click to see random Bob</button>
                <button onClick={handleSelection} name="Tom">Click to see random Tom</button>
                <button onClick={handleSelection} name="Tom and Bob">Click to see random Tom and Bob</button>
              </>
            )
      }
    </div>
  );
}
export default App;
