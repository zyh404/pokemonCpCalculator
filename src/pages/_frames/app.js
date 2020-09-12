import React from 'react';
import Logo from '../../components/logo'
import './app.css';

const App = React.createClass({
    propTypes: {
        children: React.PropTypes.any,
    },
    render() {
        const {children} = this.props;
        return (
            <div className="App">
                <div className="App-header">
                    <Logo />
                    <h2>Red Queen&rsquo;s First React App!</h2>
                </div>
                {children}
            </div>
        );
    },
});

export default App;
