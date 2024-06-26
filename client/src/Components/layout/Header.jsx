import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { orange } from '../../constants/color'
import {Menu as MenuIcon,Search as SearchIcon,Add as AddIcon,Group as GroupIcon,Logout as LogoutIcon,Notifications as NotificationsIcon }from '@mui/icons-material'
import {useNavigate} from "react-router-dom"

const SearchDialog=lazy(()=>import("../specific/Search"))
const NotificationsDialog=lazy(()=>import("../specific/Notifications"))
const NewGroupDialog=lazy(()=>import("../specific/NewGroup"))
const Header = () => {

  const navigate=useNavigate();

  const[isMobile,setIsMobile]=useState(false);
  const[isSearch,setIsSearch]=useState(false);
  const[isNewGroup,setIsNewGroup]=useState(false);
  const[isNotifications,setIsNotifications]=useState(false);

  const handleMobile=()=>
  {
    setIsMobile(prev=>!prev);
  }
  const openSearch=()=>
  {
    setIsSearch(prev=>!prev);
  }
  const openNewGroup=()=>
  {
    setIsNewGroup(prev=>!prev);
  }

  const openNotifications=()=>
  {
    setIsNotifications(prev=>!prev);
  }


  const navigateToGroup=()=>navigate("/groups")
  const logoutHandeler=()=>
  {
    console.log("Logout")
  }

  
 

  return (
   <>
   <Box sx={{flexGrow:1}} height={"4rem"}>
    <AppBar position='static' sx={{bgcolor:orange}}>

      <Toolbar>
<Typography 
variant='h6'
sx={{
  display:{xs:"none",sm:"block"}
}}>
  chattu
</Typography>


<Box sx={{
  display:{xs:"block",sm:"none"}
}}>
  <IconButton color='inherit' onClick={handleMobile}>
    <MenuIcon/>
  </IconButton>
</Box>

<Box sx={{
  flexGrow:1,
}}/>
<Box>

  <IconBtn
   title={"Search"}
   icon={<SearchIcon/>}
   onclick={openSearch}
   />

<IconBtn
   title={"New Group"}
   icon={<AddIcon/>}
   onclick={openNewGroup}
   />

<IconBtn
   title={"manage Groups"}
   icon={<GroupIcon/>}
   onclick={navigateToGroup}
   />
<IconBtn
   title={"Notifications"}
   icon={<NotificationsIcon/>}
   onclick={openNotifications}
   />

<IconBtn
   title={"Logout"}
   icon={<LogoutIcon/>}
   onclick={logoutHandeler}
   />
  

  
</Box>
      </Toolbar>
    </AppBar>
   </Box>

  {
    isSearch && <Suspense fallback={<Backdrop open />}>
      <SearchDialog/>
    </Suspense>
  }

{
    isNotifications && <Suspense fallback={<Backdrop open />}>
      <NotificationsDialog/>
    </Suspense>
  }

{
    isNewGroup && <Suspense fallback={<Backdrop open />}>
      <NewGroupDialog/>
    </Suspense>
  }

   </>
  )
}

const IconBtn=({title,icon,onclick})=>
{
  return(
    <Tooltip title={title}>
  <IconButton color='inherit' size='large' onClick={onclick}>
    {icon}
  </IconButton>
  </Tooltip>
  )
}
export default Header
