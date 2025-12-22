import './styles.css';
import {useState} from "react";

const Repository = () => {
    const [repositories, setRepositories] = useState(null);

    const repositoryName = 'GitFind';
    const repositoryDescription = 'Description'
    return(
        <div className="repositoryList">
            <strong>{ repositoryName }</strong>
            <p>{ repositoryDescription }</p>
            <hr/>
        </div>
    )
}

const Repositories = () => {
    return (
        <div className="repositories">
            <h4>Repositórios</h4>
            <Repository/>
        </div>
    )
}

export default Repositories;