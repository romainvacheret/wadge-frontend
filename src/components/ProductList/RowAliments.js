
import React, {  Component } from 'react';

// const foods=[];

const handleCardClick=()=> {
    
    console.log( 'clicked')
  }
// const myfoods=shuffle(foods);
const Rowalt = ({food})=><tr><td>{food.nom}</td><td>{food.type}</td>
<td><button onClick={handleCardClick}class="btn btn-info" >
<input type="checkbox"/></button></td></tr>
// {checked? myfood.push({food}):null}


export default Rowalt