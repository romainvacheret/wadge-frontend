import React, { useEffect,useState  } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Filter.css';

const Trie= ({tabNumber, setTabNumber,setChoice})=>{
const [anchorEl, setAnchorEl] = React.useState(null);
const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  
  };
const handleClose = () => {
    setAnchorEl(null);
  };
  return(
<>
  <div onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true"  className={`monthfilter-bar__tab ${tabNumber === 0 ? 'monthfilter-bar__tab__current': ''}`}>Janvier              
  </div><Menu
       id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}>
      <MenuItem onClick={ () => { setTabNumber(0);setChoice(0);}}>Par Nom</MenuItem>
      <MenuItem onClick={ () => {setTabNumber(0);setChoice(1); }}>Par Date Peremption</MenuItem>

      </Menu>
     
      <div onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true"  className={`monthfilter-bar__tab ${tabNumber === 1 ? 'monthfilter-bar__tab__current': ''}`}>Fevrier              
      </div><Menu
           id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={ () => { setTabNumber(1);setChoice(0);}}>Par Nom</MenuItem>
          <MenuItem onClick={ () => {setTabNumber(1);setChoice(1); }}>Par Date Peremption</MenuItem>

          </Menu>
          <div onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true"  className={`monthfilter-bar__tab ${tabNumber === 2 ? 'monthfilter-bar__tab__current': ''}`}>
              Mars</div>
        <Menu
           id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={ () => { setTabNumber(2);setChoice(0);}}>Par Nom</MenuItem>
          <MenuItem onClick={ () => {setTabNumber(2);setChoice(1); }}>Par Date Peremption</MenuItem>

          </Menu>
          <div onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true"  className={`monthfilter-bar__tab ${tabNumber === 3 ? 'monthfilter-bar__tab__current': ''}`}>Avril              
      </div><Menu
           id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={ () => { setTabNumber(1);setChoice(0);}}>Par Nom</MenuItem>
          <MenuItem onClick={ () => {setTabNumber(1);setChoice(1); }}>Par Date Peremption</MenuItem>
          </Menu>
          <div onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true"  className={`monthfilter-bar__tab ${tabNumber === 4 ? 'monthfilter-bar__tab__current': ''}`}>Mai              
      </div><Menu
           id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={ () => { setTabNumber(4);setChoice(0);}}>Par Nom</MenuItem>
          <MenuItem onClick={ () => {setTabNumber(4);setChoice(1); }}>Par Date Peremption</MenuItem>
          </Menu>
          <div onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true"  className={`monthfilter-bar__tab ${tabNumber === 5 ? 'monthfilter-bar__tab__current': ''}`}>Join             
      </div><Menu
           id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={ () => { setTabNumber(5);setChoice(0);}}>Par Nom</MenuItem>
          <MenuItem onClick={ () => {setTabNumber(5);setChoice(1); }}> Par Date Peremption</MenuItem>
    
          </Menu>
          <div onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true"  className={`monthfilter-bar__tab ${tabNumber === 6 ? 'monthfilter-bar__tab__current': ''}`}>Juillet              
      </div><Menu
           id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={ () => { setTabNumber(6);setChoice(0);}}>Par Nom</MenuItem>
          <MenuItem onClick={ () => {setTabNumber(6);setChoice(1); }}>Par Date Peremption</MenuItem>
          </Menu> 
          <div onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true"  className={`monthfilter-bar__tab ${tabNumber === 7 ? 'monthfilter-bar__tab__current': ''}`}>Aout              
      </div><Menu
           id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={ () => { setTabNumber(7);setChoice(0);}}>Par Nom</MenuItem>
          <MenuItem onClick={ () => {setTabNumber(7);setChoice(1); }}>Par Date Peremption</MenuItem>
          </Menu>
          <div onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true"  className={`monthfilter-bar__tab ${tabNumber === 8 ? 'monthfilter-bar__tab__current': ''}`}>Septembre              
      </div><Menu
           id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={ () => { setTabNumber(8);setChoice(0);}}>Par Nom</MenuItem>
          <MenuItem onClick={ () => {setTabNumber(8);setChoice(1); }}>Par Date Peremption</MenuItem>
   
          </Menu>
          <div onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true"  className={`monthfilter-bar__tab ${tabNumber === 9 ? 'monthfilter-bar__tab__current': ''}`}>Octobre              
      </div><Menu
           id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={ () => { setTabNumber(9);setChoice(0);}}>Par Nom</MenuItem>
          <MenuItem onClick={ () => {setTabNumber(9);setChoice(1); }}>Par Date Peremption</MenuItem>
         
          </Menu>
          <div onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true"  className={`monthfilter-bar__tab ${tabNumber === 9 ? 'monthfilter-bar__tab__current': ''}`}>Octobre              
      </div><Menu
           id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={ () => { setTabNumber(10);setChoice(0);}}>Par Nom</MenuItem>
          <MenuItem onClick={ () => {setTabNumber(10);setChoice(1); }}>Par Date Peremption</MenuItem>
         
          </Menu>
          <div onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true"  className={`monthfilter-bar__tab ${tabNumber === 9 ? 'monthfilter-bar__tab__current': ''}`}>Decembre             
      </div><Menu
           id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={ () => { setTabNumber(11);setChoice(0);}}>Par Nom</MenuItem>
          <MenuItem onClick={ () => {setTabNumber(11);setChoice(1); }}>Par Date Peremption</MenuItem>
         
          </Menu>
          </>
      
  );
}

export default Trie;