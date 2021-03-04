import React, { useState } from 'react';
import {Container,Checkbox,ListItem,ListItemIcon,ListItemText,CardMedia,Card,CardHeader,Avatar,CardActions ,CardContent,List,IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import {FaPlusCircle} from 'react-icons/fa';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { red,green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const TodoList=()=>{
      const [toDos,setToDos]=useState(["ToDO 1"]);
      const [checked, setChecked] = React.useState([0]);
      const handleClickPlus=()=>{
        const input=document.getElementById("input");
        console.log("avant le if "+input.value);
               const todo=input.value;
                 if(todo){
                  toDos.push(todo);
                  setToDos([...toDos]);
                 }
        console.log({toDos}); 
     }
     const clearTodo=()=>{
       const  t=[];
         setToDos([...t]);
         console.log(toDos);
     }
      const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
  //  const clear=document.querySelector("clear");
      //const options={weekly:"long",month:"short",day:"numeric"};
      const classes = useStyles();

  return (
    
    <>
    <Container  maxWidth="sm" >
    <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Course
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={clearTodo}className="clear">
            <AutorenewIcon/>
          </IconButton>
        }
        title="La liste de vos courses à faire!"
        subheader={new Date().toLocaleDateString()}
      />
      <CardMedia
        className={classes.media}
         image="../../../logo2.png"
        title="Paella dish"
      />    
        <CardContent>
        <List className={classes.root} id="list">{
            
      toDos.map((value) => {
        const labelId = `checkbox-list-label-${value}`;
    
        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
              className="complete"
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={` item ${value}`} className="text" />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" className="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      }
    )}
    </List>
        </CardContent>
        <CardActions disableSpacing>
      <div className="add-item">
          <IconButton onClick={handleClickPlus}><FaPlusCircle/></IconButton>
          <Icon className="fa fa-plus-circle" style={{ color: green[500] }} />
      <input tpe="text" id="input" placeholder="Ajouter un ToDo"></input>
      
      
      </div>
        
      </CardActions>
            </Card>
    </Container>
    </>
      
    );
}
export default TodoList;