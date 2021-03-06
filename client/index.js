/**
 * Created by ImageDBUser on 2017/3/10.
 */
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './style/basicStyle.scss';
import './plugin/jQuery.md5';
import './plugin/jquery.cookie';


import Content from './modules/content';
import Home from './modules/home';
import SignUp from './modules/signUp';
import CentralPanel from './modules/centralPanel';
import Profile from './modules/profile';
render((
        <Router history={browserHistory}>
            <Route path="/" component={Content}>
                <IndexRoute component={Home}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/centralpanel" component={CentralPanel}/>
                <Route path="/profile" component={Profile}/>
            </Route>
        </Router>
),document.getElementById('basicDiv'))