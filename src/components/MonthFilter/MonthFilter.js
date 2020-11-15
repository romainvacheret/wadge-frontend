import React, {useState, useEffect} from "react";

const MonthFilter = () => {
    const [foodList, setFoodList] = useState([]);

    const onClick = (month) => {
        month = document.getElementById("monthSelect").value;
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

    return (
        <>
            <label>
                Choisissez un Mois:
                <select id="monthSelect" onChange={ (value) => onClick(value) }>
                    <option value="Janvier">Janvier</option>
                    <option value="Fevrier">Fevrier</option>
                    <option value="Mars">Mars</option>
                    <option value="Avril">Avril</option>
                    <option value="Mai">Mai</option>
                    <option value="Juin">Juin</option>
                    <option value="Juillet">Juillet</option>
                    <option value="Aout">Aout</option>
                    <option value="Septembre">Septembre</option>
                    <option value="Octobre">Octobre</option>
                    <option value="Novembre">Novembre</option>
                    <option value="Decembre">Decembre</option>
                </select>
            </label>
            {!foodList.length ? <></> :( <>
                    <h3 className='Title'> Liste des fruits et légumes </h3>
                    <ul> {
                    foodList.map(({ nom, type }, idx) => {
                        return ( 
                            <div className="List"key={idx}> { 
                                <>
                                    <ul>
                                        <li>{ nom }</li>
                                        <li>{ `Type : ${ type }` }</li>
                                    </ul>
                                    <br></br>
                                </>
                            } </div> 
                        )
                        })
                    } </ul>
            </>)}
        </>
    );}

    export default MonthFilter;