/**
 * Created by ImageDBUser on 2017/3/10.
 */
import React from 'react';
import Header from './header';
import Footer from './footer';
export default class Content extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <div className="grail-body">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}