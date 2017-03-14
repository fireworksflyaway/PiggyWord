/**
 * Created by ImageDBUser on 2017/3/13.
 */
import React from 'react';
import {Link} from 'react-router';
import '../style/signUp.scss';
import '../plugin/jQuery.md5';

export default class SignUp extends React.Component{
    submitHandler(event){
        event.preventDefault();
        let username=this.refs.username.value;
        let password=this.refs.password.value;
        let passwordAgain=this.refs.passwordAgain.value;
        let email=this.refs.email.value;
        if(password!==passwordAgain)
        {
            alert("Error: Different password!");
            return;
        }
        password=$.md5(password);
        $.post('/signUpServer',
            {
                username:username,
                password:password,
                email:email
            },function (obj) {
                if(obj.suc)
                {
                    alert("Sign up accomplished!");
                    location.href='/centralpanel';
                }
                else
                {
                    alert("Sign up failed!");
                    console.log(obj.err);
                }
            })
    };
    render(){
        return (
            <div id='signUpDiv'>
                <h2>Sign Up</h2>
                <hr />
                <form role="form" onSubmit={this.submitHandler.bind(this)}>
                    <div className="form-group">
                        <input type="text" placeholder="Username" className="form-control" ref="username" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" className="form-control" ref="password" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password Again" className="form-control" ref="passwordAgain" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" className="form-control" ref="email" required />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                        <button type="reset" className="btn btn-danger">Reset</button>
                    </div>
                </form>
            </div>
        );
    }
}