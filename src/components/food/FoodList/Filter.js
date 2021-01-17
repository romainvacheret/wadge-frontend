import React, { useEffect,useState  } from 'react';
import Trie from './Trie';
import './Filter.css';
const months = ["january", "february", "march", "april", "may", "jun", "july", "august", "september", "october", "november", "december"];
const Filter = ({ tabNumber, setTabNumber, setFoodList }) => {
    const [choice,setChoice]=useState(0);

    const getProductsSort = (month,choice) => {
       
            fetch(`http://localhost:8080/foods/${month}/${choice}`, {
           method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => setFoodList([...response]))
        .catch(err => console.log('ERROR', err));
    };
   
    
    useEffect(()=>getProductsSort(months[tabNumber],choice),[tabNumber,choice]);

    return (
            
        <div className="monthfilter__bar">               
        <Trie  tabNumber = { tabNumber }setTabNumber={ setTabNumber } setChoice={setChoice}/>
        </div>
     
    );
}

export default Filter;