import React from 'react';
import {Link} from 'react-router';

import AppFrame from './_frames/app';

const App = React.createClass({
    render() {
        return (
            <AppFrame>
                <Link to="/todo">See the todo App</Link><br />
                <Link to="/pokemon">See the Pokemon App</Link>
            </AppFrame>
        );
    },
});

export default App;
