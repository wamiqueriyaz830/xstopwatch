
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [timer,setTimer]=useState(0)
  const [isTimerOn,setIsTimerOn]=useState(false)


  const formatTime=(seconds)=>{
   const minutes=Math.floor(seconds/60);
   const remainingSecods=seconds%60
   return `${minutes}:${remainingSecods<10?"0":""}${remainingSecods}`
  }

  const handleTimer=()=>{
    setIsTimerOn(!isTimerOn)
  }
  const increaseTimer=()=>{
    setTimer(prev=>prev+1)
  }
  const handleReset=()=>{
    setIsTimerOn(false)
    setTimer(0)
  }

  useEffect(()=>{
    let interval=null
    if(isTimerOn){
      interval=setInterval(increaseTimer,1000)
    }
    else{
      clearInterval(interval)
    }

    return ()=>{clearInterval(interval)}
    
    
    
  },[isTimerOn])
  return (
    <>
    <h1>Stopwatch</h1>
     <p>Time: {formatTime(timer)}</p>
     <button onClick={handleTimer}>{isTimerOn?"Stop":"Start"}</button>
     <button onClick={handleReset}> Reset</button>
    </>
  );
}

export default App;
