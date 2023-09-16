import React,{useState} from "react";

const App = () =>{  
    let [calc,setCalc] = useState({num1:"",num2:""});
    let [operation,setOperation] = useState("");
    let [error,setError] = useState("");
    let [success,setSuccess] = useState("");

    let {num1,num2} = calc;
    console.log(calc);
    
    function calculate(opname){
        
        if(opname === "add"){
            console.log("num1:",num1);
            setOperation(Number(num1)+Number(num2));
        }
        else  if(opname === "sub"){
            setOperation(num1-num2);
        }
        else  if(opname === "multi"){
            setOperation(num1*num2);
        }
        else  if(opname === "divi"){
            setOperation(num1/num2);
        }

    }

    function validation(event){
        if(!num1 || !num2){
            setError("Both fields are required");
            setSuccess("");
            return;
        }   
        calculate()
        
        setSuccess("Success!");
        setError("")
        return;
        
        
    }


    return(
        <div className="container">
            <div className="container-item">
                <h1 style={{color:"blue"}}>React Calculator</h1>
                <input type="text" placeholder="Num 1" 
                onChange={e=>{setCalc({...calc,num1:e.target.value})}}/>
                <br/>
                <input type="text" placeholder="Num 2" 
                onChange = {e=>{setCalc({...calc,num2:e.target.value})}}/>
                <div className="aritmetic-btn">
                    <button id="add" onClick={() => {
                        validation();
                        calculate("add");
                        }}>+</button>
                    <button id="sub" onClick={() => {
                        validation();
                        calculate("sub");
                        }}>-</button>
                        <button id="multi" onClick={() => {
                        validation();
                        calculate("multi");
                        }}>*</button>
                        <button id="divi" onClick={() => {
                        validation();
                        calculate("divi");
                        }}>/</button>
                </div>
                {error &&   <h3 style={{color:"red"}}> {error} </h3> }
                {success && <h3 style={{color:"green"}}> {success} </h3> }
                {operation && <h3 style={{color:"blue"}}> Result: {operation} </h3> }
            </div>
        </div>
    )
}

export default App;