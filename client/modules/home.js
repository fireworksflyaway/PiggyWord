/**
 * Created by ImageDBUser on 2017/3/10.
 */
import React from 'react';
import {Link} from 'react-router';
import '../style/home.scss';
import '../plugin/jQuery.md5';
export default class Home extends React.Component{
    submitHandler(event){
        event.preventDefault();
        let username=this.refs.username.value;
        let password=$.md5(this.refs.password.value);
        $.post('/signInServer',{username:username,password:password},function (msg) {
            if(msg.suc){
                location.href="/centralpanel";
            }
            else
                console.log(msg.err);
        })
    };
    render(){
        return (
            <div id='welcomeDiv' className="jumbotron">
                <h2>Welcome to brand new PiggyWord! </h2>
                <p>PiggyWord is a modern website and application for people to learn English words by themselves. The brand new edition optimizes the UI and architecture, which will visibly improve user experience. Sign in and enjoy the tour of PiggyWord! </p>
                <p>If you have any idea or suggestion, please feel free to <a href="mailto:fireworksflyaway@live.com">contact me.</a></p>
                <form role="form" onSubmit={this.submitHandler.bind(this)}>
                    <div className="form-group form-inline">
                        <input type="text" placeholder="Username" className="form-control" ref="username" />
                        <input type="password" placeholder="Password" className="form-control" ref="password" />
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