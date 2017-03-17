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
    setReg(isReg){
        this.setState({isReg});
    }
    componentDidMount(){
        $.post('/confirmTokenServer', (obj)=> {
            if(obj.suc)
                this.setState({isReg: true});
            else
                this.setState({isReg: false});
        })
    }
    render(){
        console.log('rendering...');
        return (
            <div>
                <Header isReg={this.state.isReg} setReg={this.setReg.bind(this)} />
                <div className="grail-body container" >
                    {React.Children.map(this.props.children, (child)=>{
                        return React.cloneElement(child, {
                            isReg:this.state.isReg,
                            setReg:this.setReg.bind(this)
                        })
                    }) }
                </div>
                <Footer/>
            </div>
        );
    }
}