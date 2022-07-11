import {Button} from "./Button";
import React from "react";

export type CounterType = {}

export function Counter(props: CounterType) {
    return (
        <div>
            <Button calback={() => {}} name={'GO'}/>
            <Button calback={() => {}} name={'STOP'}/>
        </div>
    )
}