import {ChangeEvent} from "react";

export type InputType={
    className:string
    valueInput:number
    callback:( valueInput:number)=>void
}

export function Input (props:InputType) {

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
      props.callback(Math.round(+event.currentTarget.value))
    }


    return(
        <input
            value={props.valueInput}
            onChange={onChangeHandler}
            className={props.className}
            type='number'/>
    )
}