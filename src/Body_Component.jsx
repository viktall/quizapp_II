import React, {useState} from 'react';
import {Box, Container} from '@mui/material'
//import Styles from './Asset/mystyles';
import EndPage from './EndPage';


const MainComp=({QSTNS, quz, count, setCount, savename}) =>{

  
  const [score, setScore]=useState(0)
  const [correct, setCorrect]= useState(0)
  const [notCorrect, setNotCorrect]= useState(0)
  const [showScore, setShowscore]=useState(false)

  


  const handleShowScore=()=>{
    setShowscore(true)     
  }
  
  
  const HandleEvent =({id, isCorrect})=> {

    
    setTimeout(()=>{
      setCount(count=>count+1)
      setCorrect(0)
      setNotCorrect(0)
      
      

    },500)
    
    
        if(isCorrect===false){

          setCorrect(0)
          setNotCorrect(id)
          
        }else{
            setCorrect(id)
            setNotCorrect(0)
            setScore(prev=>prev+1)
          }
        
  }
      
const username=savename.idty.charAt(0).toUpperCase() + savename.idty.slice(1)  

return(

  QSTNS.length===count? (<EndPage 

                                    handleShowScore={handleShowScore} 
                                    score={score} 
                                    showScore={showScore}
                                    username={username}
                                    />)
       
                                    :
  <Container maxWidth="md">
    
    <Box sx={{bgcolor:'#011627', color:'#fff', height:'100%', pb:9.6}}>
      
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:120, fontSize:30, fontWeight:'bold'}}> QUIZ APP </Box>
        <Box sx={{display:'flex', justifyContent:'space-between', bgcolor:'#011c32', alignItems:'center', px:2, height:30}}>
            <Box>Hello, {username} </Box>
            <Box> Question {[count+1]} of { QSTNS.length}</Box>
        </Box>
       <Box sx={{bgcolor:'#b5dcfd', color:'#000', display:'flex', p:5, justifyContent:'center', alignItems:'center', height:80, fontSize:35, mb:3 }}>{QSTNS[count].questions}</Box>
        <Box sx={{width:'100%', display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', alignItems:'center'}}>
            {quz?.map((t)=>(
              
              <Box
                  onClick={()=>HandleEvent(t)} 
                  key={t.id} 
                  sx={{width:270, display:'flex', justifyContent:'center', alignItems:'center', height:75, m:2, bgcolor: correct===t.id? '#00ff00':notCorrect===t.id? '#ff0000':'#d4d24fe1'}}>

                            {t.optn}
              </Box>
              

            ))}</Box>
            
        </Box>
        </Container>

        

)}

export default MainComp;