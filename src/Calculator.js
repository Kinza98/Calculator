import React, { Component } from 'react'


function Screen(props) {
    const {value} = props
    return (
        <form className="main-screen">
            <input type="text" value={value}/>
        </form>
    )
}


function Keyboard(props) {
    const {handleKeys, handleResult} = props;
    return (
        <div className="keyboard">

            <div className="reset-row">
                <button className="op-keys" value="reset" onClick={handleKeys}>Reset</button>
            </div>

            <div className="keys-row">
                <button value="7" onClick={handleKeys}>7</button>
                <button value="8" onClick={handleKeys}>8</button>
                <button value="9" onClick={handleKeys}>9</button>
                <button className="op-keys" value="/" onClick={handleKeys}>/</button>
            </div>
            
            <div className="keys-row">
                <button value="4" onClick={handleKeys}>4</button>
                <button value="5" onClick={handleKeys}>5</button>
                <button value="6" onClick={handleKeys}>6</button>
                <button className="op-keys" value="*" onClick={handleKeys}>X</button>
            </div>
            
            <div className="keys-row">
                <button value="1" onClick={handleKeys}>1</button>
                <button value="2" onClick={handleKeys}>2</button>
                <button value="3" onClick={handleKeys}>3</button>
                <button className="op-keys" value="-" onClick={handleKeys}>-</button>
            </div>
            
            <div className="keys-row">
                <button value="0" onClick={handleKeys}>0</button>
                <button value="." onClick={handleKeys}>.</button>
                <button className="op-keys" value="+" onClick={handleKeys}>+</button>
                <button className="op-keys" value="=" onClick={handleResult}>=</button>
            </div>
        </div>
    )
}

class Calculator extends Component {
    state= {
        value:0
    }

    handleResult = () => {
        const current_val = this.state.value;
        if(current_val.length > 0){
            if(isNaN(current_val[current_val.length-1]) || isNaN(current_val[0])){
                this.setState({
                    value:'Error!'
                })
            }else{
                
                const result = eval(this.state.value) ? eval(this.state.value) : this.state.value ;
                
                this.setState({
                    value:result
                })
            }
        }
    }

    handleKeys = (e) => {
        const current= e.target.value.toString();
        let res = current == 'reset' ?  0 :
        (this.state.value == 0 || this.state.value == 'Error!' ) ? current: this.state.value + current;
        this.setState({
            value:res
        })
    }
    render() {
        return (
            <div className="calculator">
                <Screen value={this.state.value}/>
                <Keyboard handleKeys={this.handleKeys} handleResult={this.handleResult}/>
            </div>
        )
    }
}


export default Calculator;