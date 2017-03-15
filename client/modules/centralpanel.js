/**
 * Created by ImageDBUser on 2017/3/14.
 */
import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

export default class CentralPanel extends React.Component {
    render(){
        let username=$.cookie('username');
        return (
            <div className="panel panel-default">
                <h3>Central Panel</h3>
                <p>Welcome, {username}!</p>
            </div>
        )
    }
}