import {useState } from 'react';
import QSTNS from './question';
import MainComp from './Body_Component';
import Start_Page from './startPage';

function App() {

const [isClicked, setIsclicked]=useState(false)
const [name, setName]=useState('')
const [savename, setSavename]=useState({})

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
                      <MainComp QSTNS={QSTNS} savename={savename}/> 
                                : 
                      <Start_Page  HandleSubmit={HandleSubmit} name={name} setName={setName}/>                
                           
)}

export default App
