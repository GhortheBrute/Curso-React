import "./styles.css";

const Input = ({ value, onChange}) => {
    return (
        <input
            name="usuario"
            value={value}
            type="text"
            placeholder="@username"
            onChange={onChange}/>
    )
}

export default Input;