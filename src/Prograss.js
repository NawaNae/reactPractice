import React from 'react';
import ReactDOM from 'react-dom';
import './Prograss.css';
export default class Prograss extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            percent:props.percent||50,
            percentNow:props.percent||50
        };
        this.config={};
        this.config.timeout=10;
        this.updateAnimate=this.updateAnimate.bind(this);
    }
    componentDidUpdate(prevProps,prevState,snapshot) {
        if(prevProps.percent!==this.props.percent)
        {
            this.setState({percent:this.props.percent});
            if(this.state.percentNow!==this.props.percent)
                this.tid=setInterval(this.updateAnimate,this.config.timeout)
        }
            
    }
    updateAnimate()
    {
        if(this.state.percent===this.state.percentNow)
        {    clearInterval(this.tid);
            return;
        }
        if(this.state.percentNow<this.state.percent)
            this.setState({percentNow:this.state.percentNow+1});
        else
            this.setState({percentNow:this.state.percentNow-1});
    }
    render(){
        return (<div className="Prograss">
            <div className="PrograssPa" style={{width:this.state.percentNow.toString()+"%"}}></div><span>{this.state.percentNow}%</span>
            </div>)
    }

}

