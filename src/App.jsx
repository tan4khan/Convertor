import { useState } from 'react'
import './App.css'
import HomePage from './Component/HomePage'
import { createTheme, ThemeProvider } from "@mui/material/styles";


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976D2",
      },
      secondary: {
        main: "#FFC107",
      },
    },
    // Other theme configurations...
  });


  return (
    <>
    <ThemeProvider theme={theme}>
     <HomePage/>
     </ThemeProvider>
    </>
  )
}

export default App
