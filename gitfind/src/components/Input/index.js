import "./styles.css";
import {useState} from "react";

const Input = () => {
    const [userName, setUserName] = useState('');
    const [currentUsers, setCurrentUsers] = useState(null)

    return (
        <input
            name="usuario"
            value={userName}
            type="text"
            placeholder="@username"
            onChange={event => setUserName(event.target.value)}/>
    )
}

export default Input;