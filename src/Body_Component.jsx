import React, {useState} from 'react';
import {Box} from '@mui/material'
import Styles from './Asset/mystyles';
import EndPage from './EndPage';


const MainComp=({QSTNS, savename}) =>{

  const [count, setCount] = useState(0)
  const [score, setScore]=useState(0)
  const [correct, setCorrect]= useState(0)
  const [notCorrect, setNotCorrect]= useState(0)
  const [showScore, setShowscore]=useState(false)


  const handleShowScore=()=>{
    setShowscore(true)     
  }
  
  
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
      
const username=savename.idty.charAt(0).toUpperCase() + savename.idty.slice(1)  
console.log(score, count, savename)
return(

      QSTNS.length===count? (<EndPage 

                                    handleShowScore={handleShowScore} 
                                    score={score} 
                                    showScore={showScore}
                                    username={username}
                                    />)
                                     :
    (<Box sx={Styles.box1}>
      
        <Box sx={Styles.box2}> QUIZ APP </Box>
        <Box sx={Styles.box3}>
            <Box>Hello, {username} </Box>
            <Box> Question {[count+1]} of { QSTNS.length}</Box>
        </Box>
        <Box sx={Styles.box4}>{QSTNS[count].questions}</Box>
        
            {QSTNS[count].options.map((t)=>(
              <Box 
                  onClick={()=>HandleEvent(t)} 
                  key={t.id} 
                  sx={{ ...Styles.btn, backgroundColor: correct===t.id? '#00ff00':notCorrect===t.id? '#ff0000':'#d4d24fe1'}}>

                            {t.optn}
              </Box>

            ))}
            
        </Box>) 

        

)}

export default MainComp;