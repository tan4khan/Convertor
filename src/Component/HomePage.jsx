import React from 'react'
import { Box,Typography,styled } from '@mui/material';



const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    // padding: theme.spacing(2),
    width:"100%",
    height:"100vh",
    borderRadius: theme.shape.borderRadius,
  }))
const HomePage = () => {
  return (
  <StyledBox>
<Typography variant='h6'>Hii</Typography>
  </StyledBox>
  )
}

export default HomePage
