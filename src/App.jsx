import {useState } from 'react';
import {Box, Button} from '@mui/material';
import QSTNS from './question';
import MainComp from './Body_Component';


function App() {

const [isClicked, setIsclicked]=useState(false)

const HandleToggle=()=>{

      setIsclicked(true)

  }

console.log(QSTNS)

  return (
  
             isClicked? 
                                <MainComp QSTNS={QSTNS}/> :

                                 ( 
                                    <Box sx={{display:'flex', justifyContent:'center', bgcolor:'red'}}>
                                            <Button variant='contained' onClick={HandleToggle}>Start</Button>
                                    </Box>
                                  )        
    )
}

export default App
