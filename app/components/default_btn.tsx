interface propsBtn {
    name: string;
    className ?: string
}


export default function DefaultBtn (props: propsBtn) {
    return(
<div className={`rounded-full bg-btn-def-color w-24 h-24 flex items-center justify-center ${props.className}`}>
            <a className="text-center text-white text-5xl"> {props.name} </a>
        </div>
    )
}