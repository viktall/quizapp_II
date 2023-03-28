import React from 'react';
import { Button, Box, Container} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';




const EndPage=({score, showScore, handleShowScore, savename, onRestart, qstnLength})=>{


return(
        <Container maxWidth='md'>
           <Box sx={{height:'100vh', display:'flex', flexDirection:'column'}}>
               <Box sx={{height:150, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', bgcolor:'#92e1e2'}}>
                        <Box sx={{'& .MuiSvgIcon-fontSizeMedium':{fontSize:60}}}>
                                <CheckCircle color='success'/>
                        </Box>
                        <Box sx={{fontSize:25, letterSpacing:1}}> CONGRATULATIONS, {savename} </Box>
               </Box>
               <Box sx={{flexGrow:1}}> 
                       <Box sx={{color:'#a2a2a2', fontSize:34, my:5}}>You have completed the quiz</Box>
                       <Box sx={{ display:showScore && 'none'}}> 
                            <Button size="large" variant='outlined' onClick={handleShowScore}>Show result</Button>
                       </Box>
               </Box>
              {showScore &&
                <Box sx={{fontSize:24, letterSpacing:1, lineHeight:2}}>
                                        <Box>Correct answers: {score} </Box>
                                        <Box>Percentage scored: {((score/qstnLength) * 100)}%</Box>
                                        <Box>Pass mark: 60%</Box>
                                        <Box sx={{display:'flex'}}>Remark:{ score <12 ?<Box sx={{color:'error.main'}}>Failed</Box>: <Box sx={{color:'success.main'}}>Passed</Box>}</Box>
                                        <Button 
                                                sx={{display:'flex', my:6}}
                                                variant='outlined' 
                                                size='large'
                                                onClick={onRestart}> 
                                                Play again
                                        </Button>
                </Box>}
                <Box sx={{display:'flex', height:70, justifyContent:'center', alignItems:'center', bgcolor:'#92e1e2', color:'#444'}}>created by Ugwu</Box>
          </Box> 
        </Container>       
    )}

export default EndPage;