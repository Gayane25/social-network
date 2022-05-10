import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Messages from "./Pages/Messages";
import Settings from "./Pages/Settings";
import "./App.css";  

function App() {
    return (
        <div>
            <Login />
            <Home />
            <Profile />
            <Messages />
            <Settings />


        </div>
    );
}

export default App;