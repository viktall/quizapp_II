import React from 'react';
import {Box, Button, TextField, Paper, List, ListItem} from '@mui/material';


const Start_Page=({HandleSubmit, name, setName})=>{

return(


  <Box sx={{display:'flex', height:'100vh'}}>

      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', mx:1}}>
      <Paper>
        <Box sx={{textAlign:'center', bgcolor:'#011c32', py:2, color:'#fff', fontSize:{sm:30, xs:20}, fontWeight:'bold'}}>
              AfrikQuiz
        </Box>
        <Box 
          component="form" 
          onSubmit={HandleSubmit} 
          autoComplete="off" 
          sx={{m:5, display:'flex'}}
          >
        <TextField 
                          required 
                          label='Enter your username' 
                          value={name} 
                          onChange={(e)=>setName(e.target.value)}
                          inputProps={{maxLength:12}}
                          autoFocus
                          />

                          <Button 
                          variant='outlined' 
                          type='submit'
                          sx={{ml:1}}>
                              Start
                          </Button>       
            </Box>               
      </Paper>

      <Box sx={{display:{xs:'block', md:'none'}, bottom:0, fontSize:14, position:'fixed', width:'100%', py:1, textAlign:'center'}}>copyright &copy; 2023 AfrikQuiz | victor ugwu</Box>
      
    </Box>
    <Box sx={{bgcolor:'#011c32', color:'white', px:10, display:{xs:'none', md:'block'}}}>
    <Box sx={{fontSize:30, fontWeight:'bold', textAlign:'center', my:6}}>
          HOW TO PLAY
    </Box>
    <List sx={{letterSpacing:1}}>
        <ListItem> 1. To start, enter a username of not more than twelve (12) characters.</ListItem>
        <ListItem> 2. Choose the correct country-capital from the set of choices (A, B, C, D) displayed  for the given Africa country.Wrong answers attracts no score.</ListItem>
        <ListItem> 3. After completing quiz, click on the 'show score' button to display score. </ListItem>
        <ListItem> 4. For maximum score, all questions (20) must be answered correctly within 60sec. No score is allocated to unaswered questions</ListItem>
        <ListItem> 5. Players must score above 60%, to pass the quiz</ListItem>
      </List>  

      <Box sx={{bottom:0, fontSize:14, color:'#888', position:'fixed', width:'40%', py:2, textAlign:'center'}}>copyright &copy; 2023 AfrikQuiz | victor ugwu</Box>
    </Box>
    
  </Box>
  
)}

export default Start_Page;

