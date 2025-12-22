import Header from "../../components/Header";
import background from '../../assets/images/background.png';
import './styles.css';
import Button from "../../components/Button";
import Input from "../../components/Input";
import Profile from "../../components/Profile";
import Repositories from "../../components/Repositories";
import GetData from "../../components/GetData";

function App() {
    const {
        user,
        userRepos
    } = GetData();

    return (
    <div className="App">
      <Header />
        <div className="conteudo">
            <img src={ background } className="background" alt="Git icon black."/>
            <div className="info">
                <div>
                    <Input />
                    <Button />
                </div>
                <Profile />
                <Repositories/>
            </div>
        </div>
    </div>
    );
}

export default App;