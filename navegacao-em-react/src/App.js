import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Feed } from "./pages/Feed";
import {useLocation} from "react-router";
import {Header} from "./components/Header";


function App() {
  return (
    <Router>
        <AppContent/>
    </Router>
  );
}

function AppContent() {
    const location = useLocation();

    const authenticated = location.pathname === '/feed';

    return (
        <>
            <Header authenticated={authenticated}/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/feed" element={<Feed />}/>
            </Routes>
        </>
    )
}

export default App;