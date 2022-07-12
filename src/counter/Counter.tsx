import {Button} from "../Button";
import React from "react";
import st from './Counter.module.css'

export type CounterType = {
    addOne: () => void
    resetZero: () => void
    number: number
    max: number
    text: boolean
    error:boolean
}

export function Counter({text, max, number, resetZero, addOne,error}: CounterType) {

    return (
        <div className={st.frame}>
            <div className={st.scrin}>

                {error&&<div>error</div>}

                {text === false && !error&&<div className={number === max ? st.numberRed : st.number}>
                    {number}</div>}

                {text && !error&&<div className={st.text}>Dear user please click
                    settings!</div>}

            </div>
            <Button
                className={st.butGo}
                calback={addOne} name={'GO'}/>
            <Button
                className={st.butReset}
                calback={resetZero} name={'RESET'}/>
        </div>
    )
}