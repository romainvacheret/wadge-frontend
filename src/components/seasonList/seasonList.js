import React, { useState, useEffect } from 'react';

const SeasonList = () => {
    const [foodList, setFoodList] = useState([]);

    useEffect(() => fetch("http://localhost:8080/food_list", {
        method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .catch(err => console.log('Error: ', err))
        .then(response => response.json())
        .then(response => setFoodList([...response['Food']])), 
    []);
    
    return (<ul> {foodList.map((element, idx) => {console.log(element); return (<li key={idx}>{element}</li>)})} </ul>);
}

export default SeasonList;