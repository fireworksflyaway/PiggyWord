/**
 * Created by ImageDBUser on 2017/3/10.
 */
import React from 'react';
import {Link} from 'react-router';
import SignIn from './signIn';
import '../style/home.scss';

export default class Home extends React.Component{

    render(){
        let component=this.props.isReg?<Link to="/centralpanel">Go to central panel</Link>:<SignIn setReg={this.props.setReg} />;
        return (
            <div id='welcomeDiv' className="jumbotron">
                <h2>Welcome to brand new PiggyWord! </h2>
                <p>PiggyWord is a modern website and application for people to learn English words by themselves. The brand new edition optimizes the UI and architecture, which will visibly improve user experience. Sign in and enjoy the tour of PiggyWord! </p>
                <p>If you have any idea or suggestion, please feel free to <a href="mailto:fireworksflyaway@live.com">contact me.</a></p>
                {component}
            </div>
        );
    }
}


