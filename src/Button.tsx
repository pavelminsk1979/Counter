export type ButtonType={
    name:string
    calback:()=>void
    className:string
    disabled:boolean

}
export function Button (props:ButtonType) {
    return(
        <button
            disabled={props.disabled}
            className={props.className}
            onClick={props.calback} >{props.name}</button>
    )
}