/**
 * Created by ImageDBUser on 2017/3/15.
 */
import React from 'react';
import {Link} from 'react-router';

export default class SignIn extends React.Component {
    submitHandler(event){
        event.preventDefault();
        let username=this.refs.username.value;
        let password=$.md5(this.refs.password.value);
        let isRemember=this.refs.rememberMe.checked;

        $.post('/signInServer',{username:username,password:password},function (msg) {
            if(msg.suc){
                if(isRemember)
                {
                    $.cookie('username',username,{expires:7});
                    $.cookie('token',msg.token,{expires:7});
                }
                else
                {
                    $.cookie('username',username);
                    $.cookie('token',msg.token);
                }

                location.href="/centralpanel";
            }
            else
                console.log(msg.err);
        })
    };
    render() {
        let username='mason';
        return (
            <form role="form" onSubmit={this.submitHandler.bind(this)}>
                <div className="form-group form-inline">
                    <input type="text" placeholder="Username" className="form-control" ref="username" defaultValue={username}/>
                    <input type="password" placeholder="Password" className="form-control" ref="password" />
                    <button type="submit" className="btn btn-primary">Sign In</button>
                    <button type="reset" className="btn btn-danger">Reset</button>
                </div>
                <div className="form-group form-inline">
                    <input type="checkbox" ref="rememberMe"/>Remember Me&emsp;
                    <Link to="/forgotpassword">Forgot password?</Link>
                </div>
            </form>
        )
    }
}

