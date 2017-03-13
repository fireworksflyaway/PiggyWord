/**
 * Created by ImageDBUser on 2017/3/13.
 */
import React from 'react';
import {Link} from 'react-router';
import '../style/signUp.scss';
export default class SignUp extends React.Component{
    render(){
        return (
            <div id='signUpDiv'>
                <h2>Sign Up</h2>
                <hr />
                <form role="form">
                    <div className="form-group">
                        <input type="text" placeholder="Username" className="form-control" id="usernameInput" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" className="form-control" id="passwordInput" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password Again" className="form-control" id="passwordAgainInput" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" className="form-control" required />
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