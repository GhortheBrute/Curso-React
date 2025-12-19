export default function Button({title}) {
    if (!{title}){
        title = "Not informed"
    }
    return (
        <div>
            <button>{title}</button>
        </div>
    )
}