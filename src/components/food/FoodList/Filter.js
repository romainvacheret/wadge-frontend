import React from 'react';

import './Filter.css';

const Filter = ({ stateOnglet, setStateOnglet, setFoodList }) => {

    const onClick = (month, value) => {
        setStateOnglet(value);
        fetch(`http://localhost:8080/foods/${month}`, {
           method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => setFoodList([...response]))
        .catch(err => console.log('ERROR', err));
    }

    return (
        <div className="contBtn">
                <div id="monthSelect" onClick={ () => onClick("january",0) }  className={`onglet ${stateOnglet === 0 ? 'active': ''}`}>Janvier</div>
                <div id="monthSelect" onClick={ () => onClick("february",1) }  className={`onglet ${stateOnglet === 1 ? 'active': ''}`}>Février</div>
                <div id="monthSelect" onClick={ () => onClick("march",2) }     className={`onglet ${stateOnglet === 2 ? 'active': ''}`}>Mars</div>
                <div id="monthSelect" onClick={ () => onClick("april",3) }    className={`onglet ${stateOnglet === 3 ? 'active': ''}`}>Avril</div>
                <div id="monthSelect" onClick={ () => onClick("may",4) }      className={`onglet ${stateOnglet === 4 ? 'active': ''}`}>Mai</div>
                <div id="monthSelect" onClick={ () => onClick("jun",5) }     className={`onglet ${stateOnglet === 5 ? 'active': ''}`}>Juin</div>
                <div id="monthSelect" onClick={ () => onClick("july",6) }  className={`onglet ${stateOnglet === 6 ? 'active': ''}`}>Juillet</div>
                <div id="monthSelect" onClick={ () => onClick("august",7) }     className={`onglet ${stateOnglet === 7 ? 'active': ''}`}>Août</div>
                <div id="monthSelect" onClick={ () => onClick("september",8)} className={`onglet ${stateOnglet === 8 ? 'active': ''}`}>Septembre</div>
                <div id="monthSelect" onClick={ () => onClick("october",9) }  className={`onglet ${stateOnglet === 9 ? 'active': ''}`}>Octobre</div>
                <div id="monthSelect" onClick={ () => onClick("november",10)} className={`onglet ${stateOnglet === 10 ? 'active': ''}`}>Novembre</div>
                <div id="monthSelect" onClick={ () => onClick("december",11)} className={`onglet ${stateOnglet === 11 ? 'active': ''}`}>Décembre</div>
        </div>
    );
}

export default Filter;