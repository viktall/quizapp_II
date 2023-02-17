import React, {useState} from 'react';
import {Box} from '@mui/material'
import Styles from './Asset/mystyles';
import EndPage from './EndPage';


const MainComp=({QSTNS}) =>{

  const [count, setCount] = useState(0)
  const [score, setScore]=useState(0)
  const [correct, setCorrect]= useState(0)
  const [notCorrect, setNotCorrect]= useState(0)
  
  
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

      QSTNS.length-1? (<Box sx={Styles.outermostbox}>
        <Box sx={Styles.outerbox}> Question {[count+1]}</Box>

        <Box sx={Styles.innerbox}>{QSTNS[count].questions}</Box>
        
            {QSTNS[count].options.map((t, i)=>(
              <Box 
                  onClick={()=>HandleEvent(t)} 
                  key={i} 
                  sx={{ ...Styles.btn, backgroundColor: correct===t.id? '#00ff00':notCorrect===t.id? '#ff0000':'#cccccc'}}>

                            {t.optn}
              </Box>

            ))}
        </Box>) : (<EndPage/>)

        

)}

export default MainComp;