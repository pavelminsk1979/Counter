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
    one:string
    three:string
    imgError:string
}

export function Counter(
    {text, max, number, resetZero, addOne,error,one,three,imgError}: CounterType) {


    return (
        <div className={st.frame}>
            <div className={st.scrin}>

                {error&&<div className={st.imgError}><img src={imgError}/></div>}

                {text === false && !error&& number!==3&& number!==1&&<div className={number === max ? st.numberRed : st.number}>
                    {number}</div>}

                {text && !error&& <div className={st.text}>Dear user please click
                    settings!</div>}

                {number===3&& !error&& !text&& <div className={st.imgThree}><img src={three}/></div>}

                {number===1&& !error&& !text&& <div className={st.imgOne}><img src={one}/></div>}

            </div>
            <Button
                disabled={number===max}
                className={number===max?st.disabledButGo:st.butGo}
                calback={addOne} name={'GO'}/>
            <Button
                disabled={false}
                className={st.butReset}
                calback={resetZero} name={'RESET'}/>
        </div>
    )
}