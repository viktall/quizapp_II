import {useState, useEffect } from 'react';
import QSTNS from './question';
import MainComp from './Body_Component';
import Start_Page from './startPage';

function App() {

const [quz, setQuz] = useState([])
const [count, setCount] = useState(0)
const [isClicked, setIsclicked]=useState(false)
const [name, setName]=useState('')
const [savename, setSavename]=useState({})


              useEffect(()=>{ 
                        setQuz(QSTNS[count]?.options.sort(()=>Math.random()-0.5))
                        console.log(quz, 'thamks for running')
                            },[count])


const HandleSubmit=(e)=>{

      e.preventDefault()

      if (name){
                setSavename({idty:name})
                setIsclicked(true)
              }

      setName('')
  }


  return (
             isClicked? 
                      <MainComp 
                              QSTNS={QSTNS} 
                              quz={quz} 
                              count={count} 
                              setCount={setCount} 
                              savename={savename}/> 
                                : 
                      <Start_Page  
                              HandleSubmit={HandleSubmit} 
                              name={name} 
                              setName={setName}/>                
                           
)}

export default App
