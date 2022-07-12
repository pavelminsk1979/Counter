import {Input} from "../Input";
import {Button} from "../Button";
import st from './Setting.module.css'

export type SettingType = {
    min:number
    changeInputMin:(min:number)=>void
    max:number
    changeInputMax:(max:number)=>void
    clickSetting:()=>void
    error:boolean

}

export function Setting(
    {min,changeInputMin,max,changeInputMax,clickSetting,error}: SettingType) {

    return (
        <div className={st.frame}>
            <div className={st.max}>
                {'MAX'}
                <Input
                    callback={changeInputMax}
                    valueInput={max}
                    className={error?st.inputMinError:st.inputMax}/>
            </div>
            <div className={st.min}>
                {'MIN'}
                <Input
                    callback={changeInputMin}
                       valueInput={min}
                    className={error?st.inputMinError:st.inputMin}/>
            </div>

            <Button
                className={st.buttonSeting}
                name={'SETTINGS'}
                calback={clickSetting}/>
        </div>
    )
}