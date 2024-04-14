import React from "react";
import { useState , useCallback , useEffect } from "react";
import "./App.css";

const App = () => {

  const [length , setLength]=useState(8)
  const [numberAlloed, setNumberAlloed] = useState (false)
  const [charAlloed, setCharAlloed] = useState (false)
  const [password , setPassword] = useState("")







  const passwordGenerator = useCallback ( () => {
    let pass = "" ;
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    if (numberAlloed) str+= "1234567890";
    if (charAlloed) str+= "!@#$%^&*()_+=-[]{};',./" ;
    for (let i = 1 ; i < length ; i++){

      let char =   Math.floor(Math.random() * str.length +1  )
      pass+=  str.charAt(char)
    }



    setPassword(pass)
  } , [length , numberAlloed , charAlloed])


  useEffect( () =>{
      passwordGenerator()
  }, [length , charAlloed, numberAlloed] )


  const copy = useCallback ( () => {
    window.navigator.clipboard.writeText(password)
  } )


  return (
    <>
      <h1 className="heading">Password Generator</h1>
      <div className="wrapper">
      <div className="input">
        <div>
          <input 
          className="input-tag" 
          type="text"
          value={password}
          placeholder="Password..."
          readOnly
          />
          <button onClick={copy} >Copy</button>
        </div>

        </div>

        <div className="wrapper-2">
          <div>
            <input 
            type="range"
             value={length}
              min={8}
              max={100}
              onChange={ (e) => {
                  setLength(e.target.value)
              } } 
               
               />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div>
            <input
             type="checkbox"
             defaultChecked={numberAlloed}
             onChange={() =>{
                setNumberAlloed((prev) => !prev)
             }}
             />
            <label htmlFor="">Number</label>
          </div>

          <div>
            <input 
            type="checkbox"
            defaultChecked ={charAlloed}
            onChange={()=>{
              setCharAlloed((prev) => !prev)
            }}
            />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
