const InputField = ({name, id, setFn, input, type, required}) => {
    return (
        <div className="field">
            <label htmlFor={id}>Enter {name}:</label>
            <input
                required={required}
                type={type}
                id={id}
                placeholder={`Add ${name}`}
                onChange={(event) => {
                    setFn(event.target.value)
                }}
                value={input} />
        </div>
    )
}

export default InputField