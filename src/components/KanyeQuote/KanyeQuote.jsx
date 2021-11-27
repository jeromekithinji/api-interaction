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
        <div className="tweet">
            <div className="tweet__container">
                <p className="tweet__text">{yeQuote ? yeQuote.quote : ""}</p>              
                {/* Conditionally rendering response */}
                <span class="user">
                    <span class="user__img"></span>
                    <span class="user__username">
                        <p>ye</p>
                        <span>kanyewest</span>
			        </span>
                    <span class="tweet__like">
                        <input id="toggle-heart" type="checkbox"/>
                        <label for="toggle-heart">❤</label>
                    </span>
                    </span>
            </div>
            <button className="button__new" onClick={getYeQuote} >♻ new tweet</button>

        </div>
    )
}

export default KanyeQuote
