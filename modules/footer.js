/**
 * Created by ImageDBUser on 2017/3/10.
 */
import React from 'react';
export default class Footer extends React.Component{
    render(){
        return (
            <footer className="bottom">
                <div className="container">
                    <hr />
                    <p className="text-center">Copyright © {new Date().getFullYear()} PiggyWord</p>
                </div>
            </footer>
        );
    }
}