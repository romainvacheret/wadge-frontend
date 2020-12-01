import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    svg: {
        width: 70,
        height: 70,
        stroke: 'black',
        strokeWidth: 5,
    },
    rect: {
        width: 70,
        height: 70,
        stroke: 'black',
        strokeWidth: 5
    },
    letter: {
        fontSize: '40px',
        strokeWidth: 2,
    },
    word: {
        fontSize: '13px',
        strokeWidth: 1
    }
});

const FoodRepresentation = ({ word, color}) => {   
    const classes = useStyles(); 
    word = word.charAt(0).toUpperCase() + word.slice(1);
    const letter = word.slice(0, 2);

    return (
        <svg x='0' y='0' className={ classes.svg }>
            <rect x='0' y='0' className={ classes.rect } fill={ color }/>
            <text x='7' y='45' className={ classes.letter }> { letter }</text>
            <text x='5' y='63' className={ classes.word }>{ word }</text>
        </svg>
    );
}

export default FoodRepresentation;