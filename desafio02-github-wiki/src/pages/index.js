import gitLogo from '../assets/github-mark-white.png';
import {Container} from "./styles";

function App() {
  return (
    <Container>
        <img src={gitLogo} width={72} height={72} alt="GitHub logo"/>
    </Container>
  );
}

export default App;