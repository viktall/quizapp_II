import React, {useState} from 'react';
import {Box} from '@mui/material'


const MainComp=({QSTNS}) =>{

  const [count, setCount] = useState(0)
  const [score, setScore]=useState(0)
  const [correct, setCorrect]= useState(0)
  const [notCorrect, setNotCorrect]= useState(0)
  

  /*const btn={

    display:'flex',
    width: 500,
    height: 70,
    justifyContent:'center',
    alignItems:'center',
    mx: 'auto',
    my:1,
    backgroundColor: 'primary.dark',
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },
    
}     
*/


  

  const HandleEvent =({id, isCorrect})=> {


    setTimeout(()=>{

      setCorrect(0)
      setNotCorrect(0)
      setCount(prev=>prev+1)
      

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
      
      
      

  console.log(score, count)
return(

      <Box sx={{ width:950, mx:'auto', pb:1}}>
        <Box sx={{display:'flex', justifyContent:'center', height:60, alignItems:'center', fontSize:'25px', bgcolor:'#178CA4'}}> Question {[count+1]}</Box>

        <Box sx={{display:'flex', height:110, justifyContent:'center', alignItems:'center', fontSize:'40px', bgcolor:'#B3DEE5'}}>{QSTNS[count].questions}</Box>
        
            {QSTNS[count].options.map((t, i)=>(
              <Box 
                  onClick={()=>HandleEvent(t)} key={i} 
                    sx={{display:'flex',
                          width: 500,
                          height: 70,
                          justifyContent:'center',
                          alignItems:'center',
                          mx: 'auto',
                          my:1, 
                          cursor:'pointer',
                          backgroundColor:  correct===t.id? '#00ff00':notCorrect===t.id? '#ff0000':'#cccccc',
                          }}>

                            {t.optn}
              </Box>

            ))}
        </Box>

        

)}

export default MainComp;