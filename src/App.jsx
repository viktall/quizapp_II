import {useState, useEffect} from 'react';
import QSTNS from './question';
import MainComp from './Body_Component';
import Start_Page from './startPage';
import EndPage from './EndPage';

const App=()=> {

const [state, setState]=useState([])
const [qstnLength, setQLength]=useState(53)
const [name, setName]=useState('')
const [savename, setSavename]=useState([])
const [isClicked, setIsclicked]=useState(false)
const [count, setCount]=useState(0)
const [score, setScore]=useState(0)
const [correct, setCorrect]=useState(0)
const [notCorrect, setNotCorrect]=useState(0)
const [showScore, setShowscore]=useState(false)


useEffect(()=>{
        if(isClicked){
                setState(()=>QSTNS.sort(()=>Math.random()-0.5)
                        ?.map(x=>({...x, options:x.options
                        ?.sort(()=>Math.random()-0.5)})))
                      }
        console.log('thanks for running')
},[isClicked])

const HandleSubmit=(e)=>{

      e.preventDefault()
      
      if (name){
                setSavename([name.charAt(0).toUpperCase()+name.slice(1)])
                setIsclicked(true)
              }else{
                setSavename({})
                setIsclicked(false)
              }
      
      setName('')
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
      
      const handleShowScore=()=>{
        setShowscore(true)     
      }
      //on clicking the restart button

      const onRestart=()=>{
        setState([])
        setShowscore(false)
        setScore(0)
        setCount(0)
        setIsclicked(false)
        setQLength(10)
        setSavename([])                                     
    }
  

  return (
          qstnLength===count?
                      <EndPage
                          score={score}
                          showScore={showScore}
                          handleShowScore={handleShowScore}
                          savename={savename}
                          onRestart={onRestart}
                          qstnLength={qstnLength}
                        />
                      :
             isClicked? 
                      <MainComp 
                              HandleEvent={HandleEvent}
                              correct={correct}
                              notCorrect={notCorrect}
                              state={state} 
                              count={count} 
                              savename={savename}
                              qstnLength={qstnLength}
                            /> 
                                : 
                      <Start_Page  
                              HandleSubmit={HandleSubmit} 
                              name={name} 
                              setName={setName}/>                                    
)}

export default App
