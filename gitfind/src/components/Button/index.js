import "./styles.css";

const Button = ({ onClick, title="Buscar", active= false }) => {
    return (
        <button
            onClick={onClick}
            className={active ? "active" : ""}
        >
            {title}
        </button>
    )
}

export default Button;