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

    const handleGetData = async () => {
        const userData = await fetch(`https://api.github.com/users/${userName}`);
        const newUser = await userData.json();

        if (newUser.name) {
            const { avatar_url, name, bio, login } = newUser;
            setCurrentUser({ avatar_url, name, bio, login });

            const repositoriesData = await fetch(`https://api.github.com/users/${login}/repos`);
            const newRepositories = await repositoriesData.json();

            if (newRepositories.length) {
                setRepositories(newRepositories);
            }
        } else {
            // Caso de erro: Limpa os estados ou exibe um alerta
            alert("User not found!");
            setCurrentUser(null);
            setRepositories(null);
        }
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
                    <Button onClick={handleGetData}/>
                </div>
                {/* Passamos o valor e a função de atualizar para o Input */}
                {currentUser?.name ? (
                    <>
                        <Profile user={currentUser}/>
                        <Repositories repos={repositories}/>
                    </>
                ) : null}

            </div>
        </div>
    </div>
    );
}

export default App;