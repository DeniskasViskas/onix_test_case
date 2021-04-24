import React, {Component} from 'react';

const {Provider, Consumer} = React.createContext();

class ThemeContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        };
    }

    toggleTheme = () => {
        this.setState((prevState) => {
            return {
                theme: prevState.theme === 'light' ? 'dark' : 'light'
            };
        });
    };

    render() {
        const {theme} = this.state;
        return <Provider value={{theme, toggleTheme: this.toggleTheme}}>{this.props.children}</Provider>;
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer};
