import React, { useState, useEffect } from 'react';
import Rowalt from './RowAliments'

const Myfoods=() => {
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
        .then(response => setFoodList([...response])), 
    []);
   
    
    
    const rows=[]
    
     foodList.map(element => {
         rows.push(<Rowalt food={element}/>)
         
     });
     return (
        <div>
            <div  className="form-group">
                <input type="text" className="form-control" placeholder="search"/>
               
            </div>
       <div className="panel panel-primary">
       <div className="panel-heading">
         <h3>Aliments</h3>
       </div>
       <div className="panel-body">
       <table className="table table-striped" >
       <thead><tr><th>Nom</th><th>Type</th><th>Recenser</th></tr></thead>  
       <tbody>{rows}</tbody> 
       </table>
       </div>
       </div>
       <button className="btn btn-success" >Enregistrer</button>
       </div>
   
    )

}
export default Myfoods