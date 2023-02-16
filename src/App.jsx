import {useState } from 'react';
import {Box, Button, IconButton} from '@mui/material'
import { ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import BrightnessHighRoundedIcon from '@mui/icons-material/BrightnessHighRounded';
import Brightness3RoundedIcon from '@mui/icons-material/Brightness3Rounded';
import QSTNS from './question';
import MainComp from './Body_Component';


function App() {

const [isClicked, setIsclicked]=useState(false)
const [darkTheme, setDarkTheme] = useState(false)

const theme = createTheme({

  palette:{
    mode: darkTheme? 'dark':'light'
  }
})

const HandleToggle=()=>{
  setIsclicked(true)
  }


 
console.log(QSTNS)

  return (
            <ThemeProvider theme={theme}>
            <CssBaseline />
                    <IconButton 
                          sx={{display:'flex-end'}} 
                          onClick={()=> setDarkTheme(!darkTheme)}> 
                                          {darkTheme? <Brightness3RoundedIcon/> : <BrightnessHighRoundedIcon/>} 
                    </IconButton>

                    { isClicked? 
                                (<MainComp QSTNS={QSTNS}/>) :

                                 ( <Box>
                                    <Button variant='contained' onClick={HandleToggle}>Start</Button>
                                  </Box>)
                    }
    </ThemeProvider>)
}

export default App
