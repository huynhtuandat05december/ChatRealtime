import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Chat from "./components/Chat";
import Login from "./components/Login";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Login} />
                <Route path='/chat' component={Chat} />
            </Switch>

        </Router>


    );
}

export default App;
