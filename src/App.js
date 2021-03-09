import React, {useState} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Todo from "./pages/Todo";
// import Redirect from "react-router-dom/es/Redirect";

const ThemeStyle = React.createContext({
    theme: 'light',
    setTheme: () => {}
});

function App() {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeStyle.Provider value={{theme,setTheme}}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/week_3" />
                    </Route>
                    <Route exact path="/week_3">
                        <Home />
                    </Route>
                    <Route exact path="/week_5">
                        <About />
                    </Route>
                    <Route exact path="/week_6">
                        <Todo />
                    </Route>
                </Switch>
            </Layout>
        </Router>
        </ThemeStyle.Provider>
    );
}
export default App;
export {ThemeStyle}