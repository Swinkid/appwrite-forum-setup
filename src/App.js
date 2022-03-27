import './App.css';
import {Forum} from "./Components/Forum/Forum";
import {Routes, Route} from "react-router-dom";
import {Login} from "./Components/Auth/Login/Login";
import {Logout} from "./Components/Auth/Logout/Logout";
import {Register} from "./Components/Auth/Register/Register";
import {ForumAppbar} from "./Components/ForumAppbar/ForumAppbar";
import {Container} from "@mui/material";
function App() {
    return (
        <div className="App">
            <Container maxWidth="md">

                <ForumAppbar />

                <Routes>
                    <Route path="/" element={<Forum />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;
