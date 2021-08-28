import React, { useState } from 'react'

const Calculadora = () => {
    const [expresion, setExpresion] = useState("")
    const [resultado, setResultado] = useState(0)

    const display = (simbol) =>{
        if(expresion[expresion.length - 1] == "." && simbol == "."){
            return

        }
        setExpresion(numero => numero + simbol)
        if(expresion[expresion.length - 1] == "="){
            if(/[1-9]/.test(simbol)){
                setExpresion(simbol)
            }else{
                setExpresion(resultado + simbol)
            }
        }
        
        
    }

    const clear = () => {
        setExpresion("")
        setResultado(0)
    }

    const calculate =() => {
        try{
            setResultado(eval(expresion))
            setExpresion(num => num + "=")
        } catch(e){
            setResultado("Error")
        }
    }

    return (
        <>
            <div className="container">
                <form action="">
                    <input type="text" name="expresion"  value={expresion} disabled />
                    <input type="text" name="display" id="display" value={resultado} disabled />
                </form>
            

            <div className="keypad">
                <button onClick={clear} id="clear">Clear</button>
                <button onClick={() => display("/")} id="divide">/</button>
                <button onClick={() => display("7")} id="seven">7</button>
                <button onClick={() => display("8")} id="eight">8</button>
                <button onClick={() => display("9")} id="nine">9</button>
                <button onClick={() => display("*")} id="multiply">*</button>
                <button onClick={() => display("4")} id="four">4</button>
                <button onClick={() => display("5")} id="five">5</button>
                <button onClick={() => display("6")} id="six">6</button>
                <button onClick={() => display("-")} id="subtract">-</button>
                <button onClick={() => display("1")} id="one">1</button>
                <button onClick={() => display("2")} id="two">2</button>
                <button onClick={() => display("3")} id="three">3</button>
                <button onClick={() => display("+")} id="add">+</button>
                <button onClick={() => display("0")} id="zero">0</button>
                <button onClick={() => display(".")} id="decimal">.</button>
                <button onClick={calculate} id="equals">=</button>
            </div>
            </div>
        </>
    )
}

export default Calculadora
