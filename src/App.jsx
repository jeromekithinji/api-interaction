import React from 'react';
import './App.scss';
import KanyeQuote from './components/KanyeQuote/KanyeQuote';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
    // fetch - promises - then/catch 
    // 1. Setup some state for the fetch
    // 2. Write a fetch function
    // 3. Decide when to call the function
    // 4. Probably us the data for something idk ...


    return (
        <div className="App">
            <KanyeQuote />
            <div id="hr7"></div>            
            <Pokemon heading=""/>

        </div>
    );
}

export default App;
