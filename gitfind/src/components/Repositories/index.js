import './styles.css';

const Repositories = ({ repos }) => {
    return (
        <div className="repositories">
            <h4>Repositórios</h4>
            {repos.map(repo => (
                <div key={repo.id} className="repositoryList">
                    <strong>{ repo.name }</strong>
                    <p>{ repo.description }</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default Repositories;