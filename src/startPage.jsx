import React from 'react';
import {Box, Button, TextField, Divider} from '@mui/material';
import Imgcomp from './mysvg';

const Start_Page=({HandleSubmit, name, setName})=>{



return(
<Box sx={{
        display:'flex', justifyContent:'space-around', alignItems:'center',
        bgcolor:'#d4d24fe1', height:'100vh'
      }}>
  <Box>
    <Imgcomp/>
  </Box>
  <Divider orientation="vertical" flexItem />
  <Box>QUIZ APP</Box>
  <Box
      component="form"
      onSubmit={HandleSubmit} 
      autoComplete="off" 
      sx={{
        display:'flex', justifyContent:'center'
      }}
    >
    
            <TextField 
                required 
                label='Enter your username' 
                value={name} 
                onChange={(e)=>setName(e.target.value)}
                inputProps={{ maxLength:12}}
                autoFocus
                sx={{width:355, mr:1}}/>

            <Button 
                 variant='outlined' 
                 type='submit'
            >
                    Start Game
            </Button>
    </Box>

    </Box>
)}

export default Start_Page;

