import React, { Fragment, useRef } from 'react'
import AppLayout from '../Components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material'
import { grayColor, orange } from '../constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../Components/styles/StyleComponents';
import Filemenu from '../Components/dilogs/Filemenu';
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../Components/shared/MessageComponent';


const user={
  _id:"sdfdfdgs",
  name:"prasad khotkar"
}

const Chat = () => {

  const containerRef=useRef(null);

  

  return (
    <Fragment>
    <Stack  ref={containerRef}
    boxSizing={"border-box"}
    padding={"1rem"}
    spacing={"1rem"}
    bgcolor={grayColor}
    height={"90%"}
    sx={{
      overflowX:"hidden",
      overflowY:"auto"
    }}>
     
     {
      sampleMessage.map((i)=>
      (
        <MessageComponent key={i._id} message={i} user={user}/>
      ))
     }
    </Stack>

    <form 
    style={{
      height:"10%"
    }}>
      <Stack 
      direction={"row"}
      height={"100%"}
      padding={"1rem"}
      alignItems={"center"}
      position={"relative"}
      >
        <IconButton 
        sx={{
          position:"absolute",
          left:"1.5rem",
          rotate:"30deg"
        }}
       
        >
          <AttachFileIcon />
        </IconButton>

        <InputBox placeholder='Type Messsage Here...' />
       <IconButton 
       type='submit'
       sx={{
        rotate:"-30deg",
        bgcolor:orange,
        color:"white",
        marginLeft:"1rem",
        padding:"0.5rem",
        "&:hover":{
          bgcolor:"error.dark"
        }
       }}>
        <SendIcon />
       </IconButton>
        
      
      </Stack>
    </form>
    <Filemenu  />
    </Fragment>
  )
}

export default AppLayout()(Chat)
