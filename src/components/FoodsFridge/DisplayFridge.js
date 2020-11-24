import React, { useState, useEffect } from 'react';
import './DisplayFridge.css';
import Checkbox from '@material-ui/core/Checkbox';

const DisplayFridge = () => {
    const [checked, setChecked] = useState([]);
    const handleChange = (event) => {
        //const element = document.getElementById(event.target.id)
        console.log(event.target);
        let check = event.target.checked;
        check = !check;
        const checklist = document.getElementById(event.target.id);
        console.log("check",checklist);
        checklist.check = !checklist.check;
        const id = event.target.id.split("-")[1];
        console.log("liste", fridgeList);
        console.log("id", id);
        const element = fridgeList[id];
        console.log("element",element);
        const { dateAjout, quantite, nom } = element.produits;
        //setChecked([...checked, { dateAjout, quantite, nom }]);
        console.log(checked);
    };
    const [fridgeList, setFridgeList] = useState([]);
    useEffect(()=> {setChecked(Array.from({length:fridgeList.length},() => false))},[fridgeList])
        useEffect(() => fetch("http://localhost:8080/display-fridge", {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
                .catch(err => console.log('Error: ', err))
                .then(response => response.json())
                .then(response => setFridgeList([...response]))
                .then(()=>console.log(fridgeList.length))
                .then(() => setChecked(Array.from({length:fridgeList.length},() => false)))
                .then(() => console.log(checked)),
            []);


        return (
            <>
                <img className='Image' src="logo.png" style={{width: 225, height: 100}}/>
                <h3 className='Title'> Frigo de l'utilisateur </h3>
                    <ul>
                        <div>
                        {
                        fridgeList.map(({nom, produits}, idx) => {
                                return (
                                    <div className="List" key={idx}>
                                        <Checkbox key={idx}
                                            id={`checkbox-${idx}`}
                                            checked={checked[idx]}
                                            onChange={handleChange}
                                            inputProps={{'aria-label': 'primary checkbox'}}
                                        /> {
                                        <>
                                            <li>{nom}</li>
                                            <ul> {produits.map(({quantite, dateAjout, dateLimite}) => (
                                                <>
                                                    <li>{`Quantite : ${quantite}`}</li>
                                                    <li>{`Date d'ajout: ${dateAjout}`}</li>
                                                    <li>{`Date limite: ${dateLimite}`}</li>
                                                </>
                                            ))}
                                            </ul>
                                            <br></br>
                                        </>
                                    } </div>
                                );
                            }
                        )
                    }
                        </div>
                    </ul>
            </>
        );
}
export default DisplayFridge;
