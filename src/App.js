import React, {useState} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

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
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Layout>
        </Router>
        </ThemeStyle.Provider>
    );
}
export default App;
export {ThemeStyle}