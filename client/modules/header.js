/**
 * Created by ImageDBUser on 2017/3/10.
 */
import React from 'react';
import {Link} from 'react-router';
export default class Header extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">PiggyWord</Link>
                    </div>
                    <div className="navbar-form navbar-right">
                        <Link to="/signup" className="btn btn-primary">Sign Up</Link>&nbsp;
                        <Link to="/" className="btn btn-default">Sign In</Link>
                    </div>
                </div>
            </nav>
        );
    }
}