import {Box, Container} from '@mui/material'


const MainComp=({HandleEvent, state, count, qstnLength, savename, correct, notCorrect}) =>{

return(

      <Container maxWidth="md">
        
        <Box sx={{bgcolor:'#011627', height:'100%'}}>
          
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', color:'#fff', height:{sm:120, xs:80}, fontSize:{sm:30, xs:20}, fontWeight:'bold'}}> QUIZ APP </Box>
            <Box sx={{display:'flex', justifyContent:'space-between', color:'#fff', bgcolor:'#011c32', alignItems:'center', px:2, height:30}}>
                <Box>Hello, {savename} </Box>
                <Box> Question {[count+1]} of { qstnLength}</Box>
            </Box>
          <Box sx={{bgcolor:'#b5dcfd', color:'#000', display:'flex', p:5, justifyContent:'center', alignItems:'center', height:{sm:100, xs:60}, fontSize:{sm:35, xs:25}, mb:4 }}>{state[count]?.questions}</Box>
            <Box sx={{width:'100%', display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', alignItems:'center', pb:1.1}}>
                {state[count]?.options?.map((t,i)=>{
                
                const letterMapping=['A', 'B', 'C', 'D']
                
                return(
                  
                  <Box
                      onClick={()=>HandleEvent(t)} 
                      key={t.id} 
                      sx={{width:{sm:270, xs:220}, display:'flex', alignItems:'center', height:{sm:75, xs:58}, fontSize:20, m:{sm:3, xs:2}, cursor:'pointer', bgcolor:'#f4f4f4', color:'#000', border:2, borderColor:correct===t.id?'#00ff00':notCorrect===t.id? '#ff0000':'#b5dcfd'}}>

                               <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', bgcolor:correct===t.id?'#00ff00':notCorrect===t.id? '#ff0000':'#b5dcfd', height:'inherit', width:70}}>{letterMapping[i]}</Box> 
                               <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', width:200}}>{t.optn}</Box>
                  </Box>
                  

                )})}</Box>
                
            </Box>
            </Container>

)}

export default MainComp;