import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
    state = {
        theme: "light"
    };
    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            };
        });
    };
    render() {
        return <Provider value={{...this.state,toggleTheme:this.toggleTheme}}>{this.props.children}</Provider>;
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };