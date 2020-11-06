
import React, { useState,  Component } from 'react';

const foods=[];
[checked,setChecked]=useState(false)
const handleCardClick=(food)=> {
    foods.push(food,food)
    console.log( food,'clicked')
  }
const myfoods=shuffle(foods);
const Rowalt = ({food})=><tr><td>{food.nom}</td><td>{food.type}</td>
<td><button onClick={handleCardClick}class="btn btn-info" >
<input type="checkbox" value="{checked}" onChange="{handleChecked}"/></button></td></tr>
// {checked? myfood.push({food}):null}


export default Rowalt