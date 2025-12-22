import Header from "../../components/Header";
import background from '../../assets/images/background.png';
import './styles.css';
import Button from "../../components/Button";
import Input from "../../components/Input";
import Profile from "../../components/Profile";
import Repositories from "../../components/Repositories";
import {useState} from "react";

function App() {
    // Estado para guardar o que é digitado no Input
    const [userName, setUserName] = useState('');

    // Estado para guardar o usuário retornado da API
    const [currentUser, setCurrentUser] = useState(null);

    // Estado para guardar os repositórios retornados da API
    const [repositories, setRepositories] = useState(null);

    const [currentSort, setCurrentSort] = useState('updated');

    const handleGetData = async () => {
        const userData = await fetch(`https://api.github.com/users/${userName}`);
        const newUser = await userData.json();

        if (newUser.name) {
            const { avatar_url, name, bio, login } = newUser;
            setCurrentUser({ avatar_url, name, bio, login });

            const repositoriesData = await fetch(`https://api.github.com/users/${login}/repos?sort=updated&direction=desc`);
            const newRepositories = await repositoriesData.json();

            //if (newRepositories.length) {
            //    setRepositories(newRepositories);
            //}

            setRepositories(newRepositories);
            setCurrentSort('updated');
        } else {
            // Caso de erro: Limpa os estados ou exibe um alerta
            alert("User not found!");
            setCurrentUser(null);
            setRepositories(null);
        }
    }

    const handleSort = (type) => {
        // Só ordena se houver repositórios
        if (!repositories) return;

        setCurrentSort(type);

        // Criamos uma cópia do array para não mutar o estado diretamente
        const sortedRepos = [...repositories];

        if (type === 'updated') {
            // Ordena por data de atualização (mais recente primeiro)
            sortedRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        } else if (type === 'name') {
            // Ordena alfabeticamente pelo nome
            sortedRepos.sort((a, b) => a.name.localeCompare(b.name));
        } else if (type === 'created') {
            // Ordena por data de criação (mais antigo primeiro)
            sortedRepos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        }

        setRepositories(sortedRepos);
    }

    return (
    <div className="App">
      <Header />
        <div className="conteudo">
            <img src={ background } className="background" alt="Git icon black."/>
            <div className="info">
                <div>
                    {/* Passamos o valor e a função de atualizar para o Input */}
                    <Input value={userName} onChange={event => setUserName(event.target.value)}/>

                    {/* Passamos a função de busca para o Button */}
                    <Button onClick={handleGetData} title="Buscar"/>
                </div>
                {/* Passamos o valor e a função de atualizar para o Input */}
                {currentUser?.name ? (
                    <>
                        <Profile user={currentUser}/>
                        {/* Área de Filtros - Só aparece se tiver repositórios */}
                        {repositories?.length > 0 && (
                            <div className="filters">
                                <Button
                                    onClick={() => handleSort('updated')}
                                    title="Mais recentes"
                                    active={currentSort === 'updated'}
                                />
                                <Button
                                    onClick={() => handleSort('name')}
                                    title="A-Z"
                                    active={currentSort === 'name'}
                                />
                                <Button
                                    onClick={() => handleSort('created')}
                                    title="Criação"
                                    active={currentSort === 'created'}
                                />
                            </div>
                        )}
                        <Repositories repos={repositories} sortOrder={currentSort}/>
                    </>
                ) : null}

            </div>
        </div>
    </div>
    );
}

export default App;