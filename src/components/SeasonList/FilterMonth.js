import React, {useState, useEffect} from "react";

const FilterMonth = () => {
    const [value, setValue] = useState("Janvier");

    /*useEffect(() => fetch("http://localhost:8080/filter", {
        method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .catch(err => console.log('Error: ', err))
        .then(response => response.json())
        .then(response => setFoodListFilter([...response['Food']])),
    []);*/



    const onClick = (month) => setValue(month);
    return (
        <>
            <label>
                Choisissez un Mois:
                <select value={'Janvier'} onChange={ () => onClick(value) }>
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
        </>
    );}

    export default FilterMonth;