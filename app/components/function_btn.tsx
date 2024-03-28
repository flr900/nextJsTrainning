interface propsBtn {
    name: string;
    className ?: string
}


export default function FunctionBtn (props: propsBtn) {
    return(
<div className={`rounded-full bg-btn-func-color w-24 h-24 flex items-center justify-center ${props.className}`}>
            <a className="text-center text-btn-res-color text-5xl"> {props.name} </a>
        </div>
    )
}