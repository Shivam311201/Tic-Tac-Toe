import React from "react";
import { useState,useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "@material-ui/core/Menu";

export default function BasicMenu(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const history=useHistory();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const[my_width,setwidth]=useState(window.innerWidth);
  useEffect(()=>{
    function handleResize() {
      setwidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)
  });  
  const handleClose = (e) => {
    setAnchorEl(null);
    var val;
    if(e.target.firstChild!=null) 
    val=e.target.firstChild.data;
    if(val==="Start new Game")
    {
      history.push("/home");
    }
  };
  return (
    <div
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        marginLeft: "-90px",
        marginRight: "40px",
      }}
    >
      <div
        style={{ marginLeft: "80px",color:"white" }}
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Welcome
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/" style={{textDecoration:"none",color:"black"}}>
        <MenuItem>
          Home 
        </MenuItem>
        </Link>
        <Link to="/about" style={{textDecoration:"none",color:"black"}}>
        <MenuItem>
          About 
        </MenuItem>
        </Link>  
        {props.value === "1" && (
          <MenuItem name="NewGame" onClick={handleClose}>
            Start new Game
          </MenuItem>
        )}
        </Menu>
    </div>
  );
}
