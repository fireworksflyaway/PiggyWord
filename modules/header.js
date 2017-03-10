/**
 * Created by ImageDBUser on 2017/3/10.
 */
import React from 'react';
import {Link} from 'react-router';
export default class Header extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">PiggyWord</Link>
                    </div>
                </div>
            </nav>
        );
    }
}