import gitLogo from '../assets/github-mark-white.png';
import {Container} from "./styles";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import {useState} from "react";
import Button from "../components/Button";
import {api} from "../services/api";

function App() {

    const [currentRepo, setCurrentRepo] = useState('');
    const [repos, setRepos] = useState([]);

    const handleSearchRepo = async () => {
        const { data }  = await api.get(`repos/${currentRepo}`)

        if (data.id) {
            setRepos(prev =>[...prev, data]);
        } else {
            alert("User not found!")
            setCurrentRepo('');
            setRepos([]);
        }
    }

    const handleRemoveRepo = () => {
        setRepos(prev => {
            prev.pop();
            return prev;
        });
    }

  return (
    <Container>
        <img src={gitLogo} width={72} height={72} alt="GitHub logo"/>
        <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)}/>
        <Button onClick={handleSearchRepo}/>
        {repos.map(repo => (
            <ItemRepo repo={repo}/>
        ))}
    </Container>
  );
}

export default App;