/**
 * Created by ImageDBUser on 2017/3/14.
 */
import React from 'react';
import $ from 'jquery';
import {Link, browserHistory} from 'react-router';

export default class CentralPanel extends React.Component {
    componentWillMount(){
        if($.cookie('username')===null)
        {
            this.props.setReg(false);
            browserHistory.push('/');
        }
    }
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