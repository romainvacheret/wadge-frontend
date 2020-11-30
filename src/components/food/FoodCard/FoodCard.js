import React, { useState } from 'react';
import { Card, Popover, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import FoodRepresentation from '../FoodRepresentation/FoodRepresentation';

const useStyles = makeStyles({
    popOverWindow: {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'center',
        },
        popover: {
            pointerEvents: "none"
        },
        paper: {
            padding: 10
        }
    }
});

const FoodCard = ({ foodAttributes, data }) => {
    const [anchor, setAnchor] = useState(null);
    const classes = useStyles();

    const { word, color } = foodAttributes;
    const open = Boolean(anchor);

    const handleMouseOver = (event) => { console.log('test'); setAnchor(event.currentTarget) };
    const handleClose = () => { console.log('fin'); setAnchor(null)};
    const handleClick = (event) => { anchor === null ? setAnchor(event.currentTarget) : setAnchor(null) }

    return (
        <div style={{ width: 70 }} 
            onClick = { handleClick }
                // onMouseEnter={ handleMouseOver }
                // onMouseLeave={ handleClose }
        >
            <FoodRepresentation 
                word={word} 
                color={color}  
                onClick = { handleClick }
            />
            {/* <Typography
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleClose}
            >
                Hover me
            </Typography> */}
            <Popover
                className={classes.popover}
                classes={{
                paper: classes.paper
                }}
                open={ open }
                anchorEl={ anchor }
                className={classes.popOverWindow}
                onClose={handleClose}
                onMouseLeave={ handleClose }
                disableRestoreFocus
            >
                { Object.keys(data).map((key, idx) => 
                    <Typography key={ idx }>
                        {`${key}: ${data[key]}`}
                    </Typography>
                )}
            </Popover>
        </div>
    );
}

export default FoodCard;