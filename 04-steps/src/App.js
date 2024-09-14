import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){
return(
  <div>
    <Steps/>
    {/* <Counter/> */}
    <Counters/>
  </div>
)
}

// function Counter(){
//   const [step, setStep]= useState(0)

//   function increaseStep(){
//    setStep((s)=>s+1)
//   }
//   function decreaseStep(){
//     if(step>0) setStep((s)=>s-1)
//   }
//   return(
//     <div>
//       <input type="range" min="0" max="10" value={step} onChange={e=>setStep(Number(e.target.value))}/>
//       <button onClick={increaseStep}>+</button>
//       <span>Step:{step}</span>
//       <button onClick={decreaseStep}>-</button>
//     </div>
//   )
// }
function Counters(){
const [count, setCount]=useState(0)
const [step, setStep]= useState(0)


function increaseStep(){
  setStep((s)=>s+1)
 }
 function decreaseStep(){
   if(step>0) setStep((s)=>s-1)
 }
function increaseCount(){
  setCount((c)=>c+1)
}
const date = new Date("Aug 9 2024")
date.setDate(date.getDate()+count)
function handelReset(){
  setCount(0)
  setStep(1)

}
return(
  <div>
  <div>
  <div>
      <input type="range" min="0" max="10" value={step} onChange={e=>setStep(Number(e.target.value))}/>
      
      <span>Step:{step}</span>
    
    </div>
    <button onClick={()=>setCount((c)=>c-1)}>-</button>
    <input type="text" min="0" max="10" value={count} onChange={e=>setCount(Number(e.target.value))}/>
    <button onClick={increaseCount}>+</button>
  </div>
  <span>
    <span>{count === 0?'today is ':count>0 ?`${count} days from today is `:`${count} days ago`}</span>
    {date.toDateString()}
    </span>
    <div>
      <button onClick={handelReset}>Reset</button>
      
    </div>
  </div>
)
}


function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest]=useState({name:'sumit'})
  function handelPrevious() {
    if (step > 1) setStep((s)=>s-1);
  }

  function handelNext() {
    if (step < 3) setStep((s)=> s+1);
    //  setTest({name:'lochan'})
  }
  return (
    <>
   <div className="close" onClick={()=>setIsOpen((is)=>!is)}>&times;</div>
   {isOpen &&( <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <StepMessage step={step}>
      {messages[step - 1]}
      </StepMessage>
      <div className="buttons">
        <Button bgColor='#7950f2' textColor='#fff' onClick={handelPrevious} text='Previous'>Previous <span>👈</span></Button>
        <Button bgColor='#7950f2' textColor='#fff' onClick={handelNext} text='Next'>Next <span>👉</span></Button>
      </div>
    </div>)}
    </>
  );
}
function StepMessage({step, children}){
  return(
    <div className="message">
      <h3>Step</h3>
      {children}
    </div>
  )
}

function Button({textColor, bgColor, onClick, children}){
  return(
    <button
       style={{ backgroundColor: bgColor, color: textColor }}
       onClick={onClick}>
    {children}
    </button>
  )

}
