import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "bootstrap/dist/css/bootstrap.min.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log(props.value); 
  return (
    <div style={{display:"inline-block",verticalAlign:"middle",marginLeft:"-90px",marginRight:"40px"}}>
      <button type="button" 
        class="btn btn-outline-light" 
        style={{marginLeft:"100px"}} 
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Welcome <AccountCircleIcon/>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {props.value===1?<MenuItem onClick={handleClose}>Save current Game</MenuItem>:""}
        {props.value===1?<MenuItem onClick={handleClose}>Start new Game</MenuItem>:""}
        <MenuItem onClick={handleClose}>Load saved Game</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
