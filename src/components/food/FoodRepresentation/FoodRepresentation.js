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
        fontSize: '10px',
        strokeWidth: 0.5
    }
});

const FoodRepresentation = ({ word, color}) => {
    const classes = useStyles();
    word = word.charAt(0).toUpperCase() + word.slice(1);
    const letter = word.slice(0, 2);
    const wordTab = word.split(' ');
    let endWord = '';
    let flag = true;
    if (wordTab.length){
        flag = false;
        endWord = wordTab[wordTab.length -1] ;
        word = word.replace(endWord,'');
    }

    return (
        <svg x='0' y='0' className={ classes.svg }>
            <rect x='0' y='0' className={ classes.rect } fill={ color }/>
            <text x='7' y='38' className={ classes.letter }> { letter }</text>

            { flag ? (
                <text x='4' y='55' className={ classes.word }>{ word }</text>
            ): (
                <>
                    <text x='4' y='53' className={ classes.word }>{ word }</text>
                    <text x='4' y='63' className={ classes.word }>{ endWord }</text>
                </>
            ) }
        </svg>
    );
}

export default FoodRepresentation;