import "./styles.css";
import handleGetUserData from "../GetData";

const Button = () => {
    return (
        <button onClick={handleGetUserData}>Buscar</button>
    )
}

export default Button;