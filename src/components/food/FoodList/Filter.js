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
        <div className="monthfilter__bar">
                <div onClick={ () => onClick("january",0) }  className={`monthfilter-bar__tab ${stateOnglet === 0 ? 'monthfilter-bar__tab__current': ''}`}>Janvier</div>
                <div onClick={ () => onClick("february",1) }  className={`monthfilter-bar__tab ${stateOnglet === 1 ? 'monthfilter-bar__tab__current': ''}`}>Février</div>
                <div onClick={ () => onClick("march",2) }     className={`monthfilter-bar__tab ${stateOnglet === 2 ? 'monthfilter-bar__tab__current': ''}`}>Mars</div>
                <div onClick={ () => onClick("april",3) }    className={`monthfilter-bar__tab ${stateOnglet === 3 ? 'monthfilter-bar__tab__current': ''}`}>Avril</div>
                <div onClick={ () => onClick("may",4) }      className={`monthfilter-bar__tab ${stateOnglet === 4 ? 'monthfilter-bar__tab__current': ''}`}>Mai</div>
                <div onClick={ () => onClick("jun",5) }     className={`monthfilter-bar__tab ${stateOnglet === 5 ? 'monthfilter-bar__tab__current': ''}`}>Juin</div>
                <div onClick={ () => onClick("july",6) }  className={`monthfilter-bar__tab ${stateOnglet === 6 ? 'monthfilter-bar__tab__current': ''}`}>Juillet</div>
                <div onClick={ () => onClick("august",7) }     className={`monthfilter-bar__tab ${stateOnglet === 7 ? 'monthfilter-bar__tab__current': ''}`}>Août</div>
                <div onClick={ () => onClick("september",8)} className={`monthfilter-bar__tab ${stateOnglet === 8 ? 'monthfilter-bar__tab__current': ''}`}>Septembre</div>
                <div onClick={ () => onClick("october",9) }  className={`monthfilter-bar__tab ${stateOnglet === 9 ? 'monthfilter-bar__tab__current': ''}`}>Octobre</div>
                <div onClick={ () => onClick("november",10)} className={`monthfilter-bar__tab ${stateOnglet === 10 ? 'monthfilter-bar__tab__current': ''}`}>Novembre</div>
                <div onClick={ () => onClick("december",11)} className={`monthfilter-bar__tab ${stateOnglet === 11 ? 'monthfilter-bar__tab__current': ''}`}>Décembre</div>
        </div>
    );
}

export default Filter;