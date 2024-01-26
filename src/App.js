import { useState } from 'react';
import './App.css';

export default function App(){
  return (
    <>
    <Header />
    <Notes />
    <Footer />
    </>
  )
}
function Header(){
  return (
    <div className='' id='headline'>
      <h1>Notes Keeper</h1>
    </div>
  )
}
function Notes(){
  const [Heading,setHeading]=useState("");
  const [Notes,setNotes]=useState("")
  const [value,setValue] = useState([])
  function updateValue(e){
    setValue(items =>[...items,e])

  }
  function onSubmit(e){
    if((!Heading)||(!Notes)) return;
    const newitems = {
      Heading,Notes,id:Date.now()
    }
    console.log(newitems)
    updateValue(newitems)
    setHeading("")
    setNotes("")
  }
  function onCancel(e){
    setHeading("")
    setNotes("")
  }
  function speciDel(e){
    setValue(items => items.filter(items=>items.id !== e))


  }
  return (
    <div id='notes'>
      <div id='form-container'>
      <form>
        <input placeholder='Heading' id='Head-input' value={Heading} onChange={(e)=>setHeading(e.target.value)}/>
        <textarea id='text-area' placeholder="Write your notes ..." value={Notes}onChange={(e)=>setNotes(e.target.value)}></textarea>
      </form>
      <div id='btn'>
        <button onClick={onSubmit}>✅</button>
        <button onClick={onCancel}>❌</button>
      </div>
      </div>
      <Final value={value} speciDel={speciDel}/>

    </div>
  )
}
function Final ({value,speciDel}){
  return(
    <div id='main-final'>
      {value.map(e=>
      <div id='main-final-box'> 
        
          <button id='final-btn' onClick={()=>speciDel(e.id)}>❌</button>
          <span>{e.Heading}</span>
          <span>{e.Notes}</span>
        
      </div>
        )}
    </div>
  )
}

function Footer(){
  return(
    <footer>
      <span>contactus@dvlpr.com</span>
      <span>Copyright&copy;2003</span>
    </footer>
  )
}