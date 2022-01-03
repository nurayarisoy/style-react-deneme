import React, { Component } from 'react'
//----------class component-----
class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state={ student:"ayse", counter:0};


    }
changeCounter=()=>{
    this.setState({counter:this.state.counter +1});
    

    };
desCounter=()=>{
    this.setState({counter:this.state.counter -1});
    
};



    render() {
        //const{home,bag}=this.props;  
        return (
           
    
         
            <div>
                <h1>hello</h1>
                <p>yas:{this.props.old} </p>
                <p>yas:{this.props.car}</p>
                <p>student:{this.state.student}</p>
                <p>counter:{this.state.counter}</p>
                <button onClick={this.changeCounter}>increase</button>
                <button onClick={this.desCounter}>descrememt</button>
               {/*} <p>ev:{home}</p>
                <p>ev :{bag}</p>------------desckrup toplu yaziyorsun*/  }
            </div>
        )
    }
}
export default ClassComponent



