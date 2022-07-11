import {Input} from "./Input";
import {Button} from "./Button";

export type SettingType={

}

export function Setting (props:SettingType) {
    const setingHandler = () => {
      
    }
    return(
        <div>
            <Input/>
            <Input/>
            <Button

                name={'SETTINGS'}
                calback={setingHandler}/>
        </div>
    )
}