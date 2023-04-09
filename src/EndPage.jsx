import React from 'react';
import { Button, Box, Stack, List, ListItem, ListItemText} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';




const EndPage=({score, showScore, handleShowScore, savename, onRestart, qstnLength})=>{


return(
        <Stack>
                <Box sx={{display:'flex', flexDirection:'column', bgcolor:'#92e1e2', alignItems:'center', justifyContent:'center', height:160}}>
                        <Box sx={{'& .MuiSvgIcon-fontSizeMedium':{fontSize:{sm:60, xs:45}}}}><CheckCircle color='success'/></Box>
                        <Box sx={{fontSize:{sm:25, xs:18}, letterSpacing:1, fontWeight:'bold'}}>CONGRATULATIONS, <span style={{color:'#828282'}}>{savename}!</span></Box>
                </Box>
                <Box sx={{mx:{sm:20, xs:5}}}>
                        <List> 
                                <ListItem sx={{color:'#a2a2a2', '& .MuiTypography-root':{fontSize:{sm:24, xs:18}}}}><ListItemText primary='You have completed the quiz'/></ListItem>
                                <ListItem sx={{ display:showScore && 'none'}}> 
                                        <Button size="large" variant='outlined' onClick={handleShowScore}>Show result</Button>
                                </ListItem>
                        </List>
                        {showScore &&
                <List>
                                        <ListItem>
                                                <ListItemText primary={`Correct answers: ${score}`}/>
                                        </ListItem>
                                        <ListItem> 
                                                <ListItemText primary={`Percentage scored: ${((score/qstnLength) * 100)}% `}/> 
                                        </ListItem>
                                        <ListItem>
                                                <ListItemText primary={`Pass mark: 60%`}/> 
                                        </ListItem>
                                        <ListItem>
                                                <ListItemText sx={{color:score<12?'red':'green'}} primary={`Result: ${score <12 ? 'Failed':'Passed'}`}/> 
                                        </ListItem>
                                        <ListItem sx={{my:3}}>
                                                <Button 
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