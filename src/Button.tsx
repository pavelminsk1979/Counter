export type ButtonType={
    name:string
    calback:()=>void
    className:string

}
export function Button (props:ButtonType) {
    return(
        <button className={props.className}
            onClick={props.calback} >{props.name}</button>
    )
}