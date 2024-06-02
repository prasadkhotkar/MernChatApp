import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { Face , AlternateEmail, CalendarMonth  } from '@mui/icons-material';
import moment from 'moment'
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar
        sx={{
            width:200,
            height:200,
            objectFit:"contain",
            marginBottom:"1rem",
            border:"5px solid white",
        }}
        />
        <ProfileCard heading={"Bio"} text={"abbsbs bkhbxsb"} />
        <ProfileCard heading={"Username"} text={"Pk777"} Icon={<AlternateEmail />} />
        <ProfileCard heading={"Username"} text={"Pk777"} Icon={<Face/>} />
        <ProfileCard heading={"joined" } text={moment('2023-11-04T18:30:00.000Z').fromNow()} Icon={<CalendarMonth />} />
        
    </Stack>
  );
};

const ProfileCard =({text, Icon,heading})=>(
    <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
    >
     {Icon && Icon}
     <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography color={"gray"} variant="caption">{heading}</Typography>
     </Stack>

    </Stack>
)

export default Profile
