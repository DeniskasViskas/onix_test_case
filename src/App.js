import React from "react"
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
import {ThemeContextProvider} from './providers/ThemeContextProvider';
import {LangContextProvider} from "./providers/LangContextProvider";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return (
        <Provider store={store}>
            <LangContextProvider>
                <ThemeContextProvider>
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
            </ThemeContextProvider>
            </LangContextProvider>
        </Provider>
    );
}
export default App;