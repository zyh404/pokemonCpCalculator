import React from 'react';
import {Route, IndexRoute} from 'react-router';
import createFragment from 'react-addons-create-fragment';

import App from '../pages/app';
import Todo from '../pages/todo';
import Pokemon from '../pages/pokemon'

const routes = [
    <Route path="/">
        <IndexRoute component={App}/>
        <Route path="todo" component={Todo}/>
        <Route path="pokemon" component={Pokemon}/>
    </Route>,
];

export default createFragment({routes});
