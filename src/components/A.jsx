import React from 'react'
import {Button} from '@mui/material';
import {useDispatch,useSelector} from "react-redux";

const A = () => {
    //to read value from redux 
    useSelector(state=>state.counter)
  return (
    <>
        <Button variant="contained">
            incrementncreaseCount
        </Button>
    </>
  )
}

export default A