import { useState } from 'react';
import './KanyeQuote.scss';

const KanyeQuote = () => {
    const [yeQuote, setYeQuote] = useState("");

    // when you call a fetch it returns a promise
    const getYeQuote = () => {
        fetch("https://api.kanye.rest/")
            .then(response => response.json()) // returing response turned to json which also returns a promise
            .then(jsonResponse => setYeQuote(jsonResponse)) // taking the jsonified respose from last .then() and setting it to the local state
            .catch(err => console.log(err)) // error handling
    }

    return (
        <div>
            <button onClick={getYeQuote} >Get some Ye!</button>
            {/* Conditionally rendering response */}
            <p>{yeQuote ? yeQuote.quote : ""}</p>        
        </div>
    )
}

export default KanyeQuote
