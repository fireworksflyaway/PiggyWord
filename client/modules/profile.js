/**
 * Created by ImageDBUser on 2017/3/20.
 */
import React from 'react';
import {Link, browserHistory} from 'react-router';
import '../style/profile.scss';
export default class CentralPanel extends React.Component {
    render(){
        //let username=$.cookie('username');
        return (
            <div>
                <h3>Profile</h3>
                <div className="flexDiv">
                    <div className="panel panel-default infoDiv">
                        <div className="panel-heading">
                            <h3 className="panel-title">Personal Information</h3>
                        </div>
                        <div className="panel-body">
                            <form className="form-horizontal" role="form">
                                <h4>Real Name</h4>
                                <input className="form-control" type="text" placeholder="Please input your real name..." />
                                <h4>Email</h4>
                                <input className="form-control" type="email" placeholder="Please input your email address..." />
                                <h4>Age</h4>
                                <input className="form-control" type="text" placeholder="Please input your age..." />
                            </form>
                        </div>
                    </div>
                    <div className="panel panel-default avatarDiv">
                        <div className="panel-heading">
                            <h3 className="panel-title">Personal Avatar</h3>
                        </div>
                        <div className="panel-body">
                            <div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}