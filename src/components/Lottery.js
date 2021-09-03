import React, { useEffect, useState } from 'react'
// import './Lottery.css'


const Lottery = () => {

    fetch('https://randomuser.me/api').then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        console.log(data);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

    return (


        <div className="card text-center">
            <div className="card-header">
                Lottery
            </div>
            <div className="card-body">
                {/* <p className="card-text">{data.title}</p> */}
                {/* <h5 className="card-title">{data.first}{ " "}{data.last}</h5> */}
                {/* <button onClick={() => window.location.reload(false)}>Try your Luck</button> */}
            </div>
        </div>

    )
}

export default Lottery;
