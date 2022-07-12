import React, {useState} from 'react';

import {Counter} from "./counter/Counter";
import {Setting} from "./setting/Setting";


function App() {
    const imgError="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7ZkhACfTJVBd1BORp2rawMqra2fVpCiAQg&usqp=CAU"

    const one="https://media.istockphoto.com/vectors/one-dollar-isolated-on-white-background-vector-illustration-vector-id1058905188?k=20&m=1058905188&s=612x612&w=0&h=46Vo1jrlKwI9Ef4nEz3YEv0_JGk-89-tE_fyKUvEKv8="

    const three="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmrDckF0A96R3FzXYLDV_cX1V-02hIf0-VDA&usqp=CAU"
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(5)
    const [text, setText] = useState(false)/* Текст,появится когда меняются
    настройки Инпутов*/
    const [number, setNumber] = useState(min)
    const [error,setError]=useState(false)

    const changeInputMax = (max:number) => {
        setMax(max)
        setText(true)
        if(max<min){
            setError(true)
        }else {
            setError(false)
        }
    }

    const changeInputMin = (min:number) => {
        setMin(min)
        setText(true)
        if(min<0||min>max){
            setError(true)
        }else {
            setError(false)
        }
    }

    const clickSetting = () => {
        setText(false)
        setNumber(min)
    }

    const addOne = () => {
        if (number < max) {
            setNumber(number + 1)
        }
    }

    const resetZero = () => {
        setNumber(min)
    }

    return (

        <div>
            <div>
                <Setting
                    error={error}
                    clickSetting={clickSetting}
                    changeInputMax={changeInputMax}
                    max={max}
                    changeInputMin={changeInputMin}
                    min={min}
                />
            </div>
            <div>
                <Counter
                    imgError={imgError}
                    three={three}
                    one={one}
                    error={error}
                    text={text}
                    max={max}
                    number={number}
                    resetZero={resetZero}
                    addOne={addOne}
                />
            </div>


        </div>
    );
}

export default App;
