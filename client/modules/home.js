/**
 * Created by ImageDBUser on 2017/3/10.
 */
import React from 'react';
import {Link} from 'react-router';
import '../style/home.scss';
export default class Home extends React.Component{
    render(){
        return (
            <div id='welcomeDiv' className="jumbotron">
                <h2>Welcome to brand new PiggyWord! </h2>
                <p>PiggyWord is a modern website and application for people to learn English words by themselves. The brand new edition optimizes the UI and architecture, which will visibly improve user experience. Sign in and enjoy the tour of PiggyWord! </p>
                <p>If you have any idea or suggestion, please feel free to <a href="mailto:fireworksflyaway@live.com">contact me.</a></p>
                <form role="form">
                    <div className="form-group form-inline">
                        <input type="text" placeholder="Username" className="form-control" id="usernameInput" />
                        <input type="password" placeholder="Password" className="form-control" id="passwordInput" />
                        <button type="submit" className="btn btn-primary">Sign In</button>
                        <button type="reset" className="btn btn-danger">Reset</button>
                    </div>
                    <div className="form-group form-inline">
                        <input type="checkbox" />Remember Me&emsp;
                        <Link to="/forgotpassword">Forgot password?</Link>
                    </div>
                </form>
            </div>
        );
    }
}