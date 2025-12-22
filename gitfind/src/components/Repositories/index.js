import './styles.css';

const Repositories = ({ repos, sortOrder }) => {
    const renderDate = (repo) => {
        if (sortOrder === 'updated') {
            return <span>Atualizado em: {new Date(repo.updated_at).toLocaleDateString('pt-BR')}</span>
        }
        if (sortOrder === 'created') {
            return <span>Criado em: {new Date(repo.created_at).toLocaleDateString('pt-BR')}</span>
        }
        return null;
    }

    return (
        <div className="repositories">
            <h4>Repositórios</h4>
            {repos?.map(repo => (
                <div key={repo.id} className="repositoryList">
                    <div className="repositoryHeader">
                        <strong>{repo.name}</strong>
                        {renderDate(repo)}
                    </div>
                    <p>{repo.description}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default Repositories;