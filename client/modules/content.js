/**
 * Created by ImageDBUser on 2017/3/10.
 */
import React from 'react';
import Header from './header';
import Footer from './footer';
export default class Content extends React.Component{
    constructor(){
        super();
        this.state={isReg:false};
    }
    // Reg(){
    //     this.setState({isReg: true});
    // }
    // RegHandler(){
    //     let username=$.cookie('username');
    //     let token=$.cookie('token');
    //     if(username&&token)
    //     {
    //         $.get('/confirmTokenServer',function (obj) {
    //             if(obj.suc)
    //                 this.setState({isReg: true});
    //             else
    //                 this.setState({isReg: false});
    //         })
    //     }
    //     else
    //         this.setState({isReg: false});
    // }
    render(){
        return (
            <div>
                <Header isReg={this.state.isReg} />
                <div className="grail-body container" >
                    {React.Children.map(this.props.children, (child)=>{
                        return React.cloneElement(child, {
                            isReg:this.state.isReg
                        })
                    }) }
                </div>
                <Footer/>
            </div>
        );
    }
}