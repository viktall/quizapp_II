import React from 'react';
import { Button, Box, Stack, List, ListItem} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';




const EndPage=({score, showScore, handleShowScore, savename, onRestart, qstnLength})=>{


return(
        <Stack>
                <Box sx={{display:'flex', flexDirection:'column', bgcolor:'#92e1e2', alignItems:'center', py:{sm:4, xs:2}}}>
                        <Box sx={{'& .MuiSvgIcon-fontSizeMedium':{fontSize:{sm:60, xs:45}}}}><CheckCircle color='success'/></Box>
                        <Box sx={{fontSize:{sm:25, xs:20}, letterSpacing:1, fontWeight:'bold', p:2}}>CONGRATULATIONS, <span style={{color:'#828282'}}>{savename}!</span></Box>
                </Box>
                <Box sx={{pl:{sm:30, xs:8}}}>
                        <Box> 
                                <Box sx={{color:'#a2a2a2', fontSize:{sm:34, xs:27}, py:4}}>You have completed the quiz</Box>
                                <Box sx={{ display:showScore && 'none'}}> 
                                        <Button size="large" variant='outlined' onClick={handleShowScore}>Show result</Button>
                                </Box>
                        </Box>
                        {showScore &&
                <List sx={{fontSize:24}}>
                                        <ListItem>Correct answers: {score} </ListItem>
                                        <ListItem>Percentage scored: {((score/qstnLength) * 100)}%</ListItem>
                                        <ListItem>Pass mark: 60%</ListItem>
                                        <ListItem sx={{display:'flex'}}>Remark: {score <12 ?<Box sx={{color:'error.main'}}> Failed</Box>: <Box sx={{color:'success.main'}}> Passed</Box>}</ListItem>
                                        <ListItem>
                                                <Button 
                                                        sx={{display:'flex', my:5}}
                                                        variant='outlined' 
                                                        size='large'
                                                        onClick={onRestart}> 
                                                         Play again
                                                </Button>
                                        </ListItem>
                </List>}
                </Box>

        </Stack>
    )}

export default EndPage;