import React from 'react'
import {Typography,Stack,Button} from "@mui/material"
import {useNavigate} from "react-router-dom"

const Home = () => {
    const navigate =useNavigate();
  return (
   <>
    <Typography variant="h4">Home</Typography>
    <Stack direction="row" gap="2rem">
    <Button variant="contained" onClick={()=>{
        navigate("/contact")
    }}>Go to contact</Button>
    <Button variant="contained" onClick={()=>{
        navigate("/about")
    }}>Go to About</Button>
    </Stack>
   </>
  )
}

export default Home