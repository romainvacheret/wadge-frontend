import React, {useState, useEffect} from "react";
import './MonthFilter.css';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const MonthFilter = () => {
    const [foodList, setFoodList] = useState([]);
    const [stateOnglet, setStateOnglet] = useState();

    const onClick = (month, value) => {
        setStateOnglet(value);
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

    const fruit = (nom, type) => {
        if(type === 'fruit') return true;
    }
    const legume = (nom, type) => {
        if(type === 'legume') return true;
    }

    return (
        <>

            <Typography variant="h3" gutterBottom className="label">
                Liste des fruits et légumes
            </Typography>
            <div className="contBtn">
                <div id="monthSelect" onClick={ () => onClick("janvier",0) }  className={`onglet ${stateOnglet === 0 ? 'active': ''}`}>Janvier</div>
                <div id="monthSelect" onClick={ () => onClick("fevrier",1) }  className={`onglet ${stateOnglet === 1 ? 'active': ''}`}>Février</div>
                <div id="monthSelect" onClick={ () => onClick("mars",2) }     className={`onglet ${stateOnglet === 2 ? 'active': ''}`}>Mars</div>
                <div id="monthSelect" onClick={ () => onClick("avril",3) }    className={`onglet ${stateOnglet === 3 ? 'active': ''}`}>Avril</div>
                <div id="monthSelect" onClick={ () => onClick("mai",4) }      className={`onglet ${stateOnglet === 4 ? 'active': ''}`}>Mai</div>
                <div id="monthSelect" onClick={ () => onClick("juin",5) }     className={`onglet ${stateOnglet === 5 ? 'active': ''}`}>Juin</div>
                <div id="monthSelect" onClick={ () => onClick("juillet",6) }  className={`onglet ${stateOnglet === 6 ? 'active': ''}`}>Juillet</div>
                <div id="monthSelect" onClick={ () => onClick("aout",7) }     className={`onglet ${stateOnglet === 7 ? 'active': ''}`}>Août</div>
                <div id="monthSelect" onClick={ () => onClick("septembre",8)} className={`onglet ${stateOnglet === 8 ? 'active': ''}`}>Septembre</div>
                <div id="monthSelect" onClick={ () => onClick("octobre",9) }  className={`onglet ${stateOnglet === 9 ? 'active': ''}`}>Octobre</div>
                <div id="monthSelect" onClick={ () => onClick("novembre",10)} className={`onglet ${stateOnglet === 10 ? 'active': ''}`}>Novembre</div>
                <div id="monthSelect" onClick={ () => onClick("decembre",11)} className={`onglet ${stateOnglet === 11 ? 'active': ''}`}>Décembre</div>
            </div>

            <div className="container">
                {!foodList.length ? <></> :( <>

                    <Typography variant="h4" gutterBottom className="label">
                        Fruits
                    </Typography>
                    <Grid container spacing={2}>
                        { foodList.map(({ nom, type }, idx) => { if( fruit(nom,type) )
                            return (
                                <>
                                <Grid item className="food">
                                    <div className="List1"key={idx}> {
                                        <>
                                            <Card className="carre">
                                                { nom }
                                            </Card>
                                        </>
                                    } </div>
                                </Grid>
                                </>
                            )
                        })}
                    </Grid>
                    <Typography variant="h4" gutterBottom className="label">
                        Légumes
                    </Typography>
                    <Grid container spacing={2}>
                         { foodList.map(({ nom, type }, idx) => { if (legume(nom,type))
                            return (
                                <>
                                <Grid item className="food">
                                    <div className="List1"key={idx}> {
                                        <>
                                            <Card className="carre">
                                                { nom }
                                            </Card>
                                        </>
                                    } </div>
                                </Grid>
                                </>
                            )
                        })}
                    </Grid>
                </>)}
            </div>

        </>
    );}

    export default MonthFilter;