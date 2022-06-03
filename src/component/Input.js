function Input(props) {
    return(
        <>
            <label className={props.classLabel}>{props.label}</label>
            <input 
                {...props.register(props.labelInput)} type={props.type} className={props.classInput} id={props.id} placeholder={props.placeholder}
                maxLength={props.maxLength} minLength={props.minLength} required={props.required}/>
        </>
    )
}

export default Input