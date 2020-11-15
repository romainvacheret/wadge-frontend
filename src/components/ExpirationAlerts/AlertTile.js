import React, { useState, useEffect } from 'react';

const AlertTile = ({ data }) => {
    // console.log(props);
    // console.log(props);

    return (
        <>
            <ul> {
            data.map(({ nom, dateAjout, quantite }, idx) => {
                return ( 
                    <div className="List"key={idx}> { 
                        <>
                            <ul>
                                <li>{ `Aliment : ${ nom }` }</li>
                                <li>{ `Date d'ajout : ${ dateAjout }` }</li>
                                <li>{ `Quantité : ${ quantite }` }</li>
                            </ul>
                            <br></br>
                        </>
                    } </div> 
                )
                })
            } </ul>
        </>
    );
}

export default AlertTile;
