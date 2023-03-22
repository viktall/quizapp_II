import React from 'react';
import { Button, Box} from '@mui/material';


const EndPage=({score, showScore, handleShowScore, savename, onRestart, qstnLength})=>{


    return(
        <Box sx={{my:25}}>
            <Box sx={{fontSize:35, textAlign:'center', mb:5}}>
                <Box> Weldone! {savename}🎉</Box> 
                <Box sx={{color:'#ccc', mt:1}}>You have come to the end of the quiz</Box>
            </Box>
            
            
            { showScore? 
                    <Box>
                        
                        <Box sx={{textAlign:'center', fontSize:65}}>You scored: {((score/qstnLength) * 100)}%
                           { score<8? <Box>👿</Box>:score<12?<Box>🥉</Box>:score<16?<Box>🥈</Box>:<Box>🏆</Box>}
                        </Box>
                        
                        
                            <Button 
                                sx={{display:'flex', mx:'auto', my:5}}
                                variant='outlined' 
                                size='large'
                                onClick={onRestart}> 
                                    Play again
                            </Button>
                    </Box> 
                            :
                    <Button 
                        sx={{display:'flex', mx:'auto', my:5}}
                        variant='outlined' 
                        size='large'
                        onClick={handleShowScore}>
                            Show Score
                    </Button>}
                
   
        </Box>
        
    )
}

export default EndPage;