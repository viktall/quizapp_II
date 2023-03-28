import React from 'react';
import {Box, Button, TextField, Paper, List} from '@mui/material';


const Start_Page=({HandleSubmit, name, setName})=>{

return(
  <Box sx={{display:'flex', height:'100vh'}}>
    <Paper sx={{width:480, mx:'auto', my:'auto'}}>
      <Box 
        sx={{
              display:'flex', 
              justifyContent:'center', 
              alignItems:'center', 
              height:80, 
              fontSize:28, 
              color:'#fff', fontWeight:'bold', bgcolor:'#011c32'}}> QUIZ APP</Box>
      <Box 
          component="form" 
          onSubmit={HandleSubmit} 
          autoComplete="off" 
          sx={{height:150, display:'flex', justifyContent:'center', alignItems:'center', bgcolor:'#efefef'}}>
            
                      <TextField 
                          required 
                          label='Enter your username' 
                          value={name} 
                          onChange={(e)=>setName(e.target.value)}
                          inputProps={{maxLength:12}}
                          autoFocus
                          sx={{width:260, mr:1}}/>
            
                      <Button 
                          variant='outlined' 
                          type='submit'
                          sx={{height:56}}
                      >
                              Start Game
                      </Button>
                     </Box>
              </Paper>            



<Box sx={{width:750, bgcolor:'#011c32', color:'white', letterSpacing:1}}>
 
 <Box sx={{fontSize:30, fontWeight:'bond', textAlign:'center', mt:10, mb:1}}>
  HOW TO PLAY
 </Box>
    <Box sx={{fontSize:20, px:10, lineHeight:2}}>
      <List>
        <li> 1. To start, enter a username of not more than twelve (12) characters.</li>
        <li> 2. Choose the correct country-capital from the set of choices (A, B, C, D) displayed  for the given Africa country. 
               Wrong answers attracts no score.</li>
        <li> 3. After completing quiz, click on the 'show score' button to display score. </li>
        <li> 4. For maximum score, all questions (20) must be answered correctly within 60sec. No score is allocated to unaswered questions</li>
        <li> 5. Players must score above 60%, to pass the quiz</li>
      </List>  
    </Box>
</Box>
</Box>
)}

export default Start_Page;

