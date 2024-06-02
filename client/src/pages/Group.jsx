import React from 'react'
import {Grid, IconButton, Tooltip} from "@mui/material"
import { KeyboardBackspace as KeyboardBackspaceIcon } from '@mui/icons-material'
import { matBlack } from '../constants/color'
import {useNavigate} from "react-router-dom"

const Group = () => {

  const navigate=useNavigate();
  const navigateBack=()=>{};
  const IconBtns=<>
  <Tooltip title="back">
  <IconButton
  sx={{
    position:"absolute",
    top:"2rem",
    left:"2rem",
    bgcolor:matBlack,
    color:"white",
    ":hover":{
      bgcolor:"rgba(0,0,0,0.7)",
    }
  }} onClick={navigateBack} >
  <KeyboardBackspaceIcon />
  </IconButton>
  </Tooltip>
  </>

  return (
  <Grid container height={"100vh"}>
    <Grid 
    item
    sx={{
      display:{
        xs:"none",
        sm:"block",
      },
    }}
    sm={4}
    bgcolor={"bisque"}
    >Groups List</Grid>

    <Grid 
    item
    xs={12}
    sm={8}
    sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      position:"relative",
      padding:"1rem 3rem",
    }}
    >
      {IconBtns}
    </Grid>
  </Grid>
  )
}

export default Group
