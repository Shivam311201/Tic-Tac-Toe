import React from "react";
import { TextField,Grid,InputAdornment,IconButton } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { VisibilityOff } from "@material-ui/icons";
 function Input({name,handleChange,half,handleShowPassword,autoFocus,type,label,custom})
 {
     return(
        <Grid item xs={12} sm={half?6:11} style={(custom==true)?{marginTop:"15px",marginRight:"8px"}:{marginTop:"15px"}}>
        <TextField
          name={name}
          style={{color:"#343a40"}}
          onChange={handleChange}
          required
          fullWidth
          label={label}
          variant="outlined"
          autoFocus={autoFocus}
          type={type}
          InputProps={name==="password"?{
          endAdornment:(
            <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
          ),
          }:null}
        />
        </Grid>
     ); 
 }
export default Input;