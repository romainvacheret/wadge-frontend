import React, { useEffect } from 'react';

import './Filter.css';

import { fetchFromUrl } from 'utils';

const Filter = ({ tabNumber, setTabNumber, setFoodList, byDays }) => {
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

    const getProducts = (month) => {
        fetchFromUrl(`foods/${month}${byDays ? '/days' : ''}`, setFoodList);
    };

    useEffect(() => 
    getProducts(months[tabNumber]), [tabNumber, byDays, months]);

    return (
        <div className="monthfilter__bar">
                <div onClick={ () => setTabNumber(0) } className={`monthfilter-bar__tab ${tabNumber === 0 ? 'monthfilter-bar__tab__current': ''}`}>Janvier</div>
                <div onClick={ () => setTabNumber(1) } className={`monthfilter-bar__tab ${tabNumber === 1 ? 'monthfilter-bar__tab__current': ''}`}>Février</div>
                <div onClick={ () => setTabNumber(2) } className={`monthfilter-bar__tab ${tabNumber === 2 ? 'monthfilter-bar__tab__current': ''}`}>Mars</div>
                <div onClick={ () => setTabNumber(3) } className={`monthfilter-bar__tab ${tabNumber === 3 ? 'monthfilter-bar__tab__current': ''}`}>Avril</div>
                <div onClick={ () => setTabNumber(4) } className={`monthfilter-bar__tab ${tabNumber === 4 ? 'monthfilter-bar__tab__current': ''}`}>Mai</div>
                <div onClick={ () => setTabNumber(5) } className={`monthfilter-bar__tab ${tabNumber === 5 ? 'monthfilter-bar__tab__current': ''}`}>Juin</div>
                <div onClick={ () => setTabNumber(6) } className={`monthfilter-bar__tab ${tabNumber === 6 ? 'monthfilter-bar__tab__current': ''}`}>Juillet</div>
                <div onClick={ () => setTabNumber(7) } className={`monthfilter-bar__tab ${tabNumber === 7 ? 'monthfilter-bar__tab__current': ''}`}>Août</div>
                <div onClick={ () => setTabNumber(8) } className={`monthfilter-bar__tab ${tabNumber === 8 ? 'monthfilter-bar__tab__current': ''}`}>Septembre</div>
                <div onClick={ () => setTabNumber(9) } className={`monthfilter-bar__tab ${tabNumber === 9 ? 'monthfilter-bar__tab__current': ''}`}>Octobre</div>
                <div onClick={ () => setTabNumber(10) } className={`monthfilter-bar__tab ${tabNumber === 10 ? 'monthfilter-bar__tab__current': ''}`}>Novembre</div>
                <div onClick={ () => setTabNumber(11) } className={`monthfilter-bar__tab ${tabNumber === 11 ? 'monthfilter-bar__tab__current': ''}`}>Décembre</div>
        </div>
    );
}

export default Filter;