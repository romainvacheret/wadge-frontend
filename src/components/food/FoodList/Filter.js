import React, { useEffect,useState  } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Filter.css';
const months = ["january", "february", "march", "april", "may", "jun", "july", "august", "september", "october", "november", "december"];
const Filter = ({ tabNumber, setTabNumber, setFoodList }) => {
    const [choice,setChoice]=useState(0);

    const getProductsSortDays = (month,choice) => {
       
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
   
    
    useEffect(()=>getProductsSortDays(months[tabNumber],choice),[tabNumber,choice]);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      
      };
    const handleClose = () => {
        setAnchorEl(null);
      };

    return (
    
        
        <div className="monthfilter__bar">
                <div onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true"  className={`monthfilter-bar__tab ${tabNumber === 0 ? 'monthfilter-bar__tab__current': ''}`}>Janvier
                
                <Menu
                     id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={ () => { setTabNumber(0);setChoice(0);}}>Tier Par Nom</MenuItem>
                    <MenuItem onClick={ () => {setTabNumber(0);setChoice(1); }}>Trier Par Peremption</MenuItem>
                    </Menu>
                    </div>
                <div onClick={ () => setTabNumber(1) }className={`monthfilter-bar__tab ${tabNumber === 1 ? 'monthfilter-bar__tab__current': ''}`}>Février</div>
                <div onClick={ () => setTabNumber(2) }     className={`monthfilter-bar__tab ${tabNumber === 2 ? 'monthfilter-bar__tab__current': ''}`}>Mars</div>
                <div onClick={ () => setTabNumber(3) }    className={`monthfilter-bar__tab ${tabNumber === 3 ? 'monthfilter-bar__tab__current': ''}`}>Avril</div>
                <div onClick={ () => setTabNumber(4) }      className={`monthfilter-bar__tab ${tabNumber === 4 ? 'monthfilter-bar__tab__current': ''}`}>Mai</div>
                <div onClick={ () => setTabNumber(5) }     className={`monthfilter-bar__tab ${tabNumber === 5 ? 'monthfilter-bar__tab__current': ''}`}>Juin</div>
                <div onClick={ () => setTabNumber(6) }  className={`monthfilter-bar__tab ${tabNumber === 6 ? 'monthfilter-bar__tab__current': ''}`}>Juillet</div>
                <div onClick={ () => setTabNumber(7) }     className={`monthfilter-bar__tab ${tabNumber === 7 ? 'monthfilter-bar__tab__current': ''}`}>Août</div>
                <div onClick={ () => setTabNumber(8)} className={`monthfilter-bar__tab ${tabNumber === 8 ? 'monthfilter-bar__tab__current': ''}`}>Septembre</div>
                <div onClick={ () => setTabNumber(9) }  className={`monthfilter-bar__tab ${tabNumber === 9 ? 'monthfilter-bar__tab__current': ''}`}>Octobre</div>
                <div onClick={ () => setTabNumber(10)} className={`monthfilter-bar__tab ${tabNumber === 10 ? 'monthfilter-bar__tab__current': ''}`}>Novembre</div>
                <div onClick={ () => setTabNumber(11)} className={`monthfilter-bar__tab ${tabNumber === 11 ? 'monthfilter-bar__tab__current': ''}`}>Décembre</div>
        </div>
     
    );
}

export default Filter;