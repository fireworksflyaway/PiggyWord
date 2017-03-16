/**
 * Created by ImageDBUser on 2017/3/10.
 */
import React from 'react';
import {Link} from 'react-router';
export default class Header extends React.Component{
    signOutHandler(event){
        //event.preventDefault();
        $.cookie('username',null);
        $.cookie('token', null);
        this.props.setReg(false);
    }
    render(){
        let username=$.cookie('username');
        let unseged=(
            <div className="navbar-form navbar-right">
                <Link to="/signup" className="btn btn-primary">Sign Up</Link>&nbsp;
                <Link to="/" className="btn btn-default">Sign In</Link>
            </div>
        );
        let seged=(
            <ul className="nav navbar-nav navbar-right" >
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" role="button">
                        {username}
                        <b className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link to="/" onClick={this.signOutHandler.bind(this)}>Sign Out</Link></li>
                    </ul>
                </li>
            </ul>
        )
        let segArea=this.props.isReg?seged:unseged;
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">PiggyWord</Link>
                    </div>
                    {segArea}
                </div>
            </nav>
        );
    }
}