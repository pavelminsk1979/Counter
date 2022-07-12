import React, {useState} from 'react';

import {Counter} from "./counter/Counter";
import {Setting} from "./setting/Setting";


function App() {
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
