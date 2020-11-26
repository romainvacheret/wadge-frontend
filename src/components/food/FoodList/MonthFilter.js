import React, {useState, useEffect} from "react";
import './MonthFilter.css';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const MonthFilter = () => {
    const [foodList, setFoodList] = useState([]);

    const onClick = (month) => {
        fetch(`http://localhost:8080/filter/${month}`, {
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

    useEffect(() => {

    }, [foodList]);

    const fruit = (nom, type) =>{
        if(type==='fruit') return nom;
    }
    const legume = (nom, type) =>{
        if(type==='legume') return nom;
    }

    return (
        <>

            <h3 className='Title'> Liste des fruits et légumes </h3>
            <div className="contBtn">
                <div id="monthSelect" onClick={ () => onClick("janvier") } className="onglet">Janvier</div>
                <div id="monthSelect" onClick={ () => onClick("fevrier") } className="onglet">Février</div>
                <div id="monthSelect" onClick={ () => onClick("mars") } className="onglet">Mars</div>
                <div id="monthSelect" onClick={ () => onClick("avril") } className="onglet">Avril</div>
                <div id="monthSelect" onClick={ () => onClick("mai") } className="onglet">Mai</div>
                <div id="monthSelect" onClick={ () => onClick("juin") } className="onglet">Juin</div>
                <div id="monthSelect" onClick={ () => onClick("juillet") } className="onglet">Juillet</div>
                <div id="monthSelect" onClick={ () => onClick("aout") } className="onglet">Août</div>
                <div id="monthSelect" onClick={ () => onClick("septembre") } className="onglet">Septembre</div>
                <div id="monthSelect" onClick={ () => onClick("octobre") } className="onglet">Octobre</div>
                <div id="monthSelect" onClick={ () => onClick("novembre") } className="onglet">Novembre</div>
                <div id="monthSelect" onClick={ () => onClick("decembre") } className="onglet">Décembre</div>
            </div>
            <div className="container">
                {!foodList.length ? <></> :( <>
                    <List>
                            <ListItemText className="label">Fruit</ListItemText>
                        <ListItemText className="food">
                                {foodList.map(({ nom, type }, idx) => {
                            return (
                                <>
                                    <div className="List1"key={idx}> {
                                        <>
                                        { ( fruit(nom,type) ) }
                                        </>
                                    } </div>
                                </>
                            )
                        })
                    }
                        </ListItemText>
                    </List>
                    <List>
                        <ListItemText className="label">Legumes</ListItemText>
                        <ListItemText className="food"> {
                        foodList.map(({ nom, type }, idx) => {
                            return (
                                <>
                                    <div className="List1"key={idx}> {
                                        <>
                                          { (legume(nom,type)) }
                                        </>
                                    } </div>
                                </>
                            )
                        })
                    }
                        </ListItemText>
                        </List>
                </>)}
            </div>

        </>
    );}

    export default MonthFilter;