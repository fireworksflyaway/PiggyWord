/**
 * Created by ImageDBUser on 2017/3/10.
 */
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import './node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './style/basicStyle.scss';

import Content from './modules/content';
import Home from './modules/home';
// let item=document.createElement("div");
// item.id="basicDiv";
// document.body.appendChild(item);

render((
        <Router history={browserHistory}>
            <Route path="/" component={Content}>
                <IndexRoute component={Home}/>
                {/*<Route path="/add" component={Footer}/>*/}
            </Route>
        </Router>
),document.getElementById('basicDiv'))