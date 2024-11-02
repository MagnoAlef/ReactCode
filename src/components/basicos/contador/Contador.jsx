import React, { Component } from "react";
export class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 1,
        passo: this.props.passoInicial || 5
    }
    inc(){
        this.setState({
          numero:  this.state.numero + this.state.passo
        })
    }
    dec(){
        this.setState({
          numero:  this.state.numero -  this.state.passo
        })
    }

    render(){

        console.log(this.state.passo)


    return (
        <div>
            <p>
                {this.state.numero}
                <p>

                <label htmlFor="Passo">Passo</label>
                <input type="number" value={this.state.passo} onChange={(e) => this.setState({
                    passo: +e.target.value
                })} />
                </p>
                <button onClick={() => this.inc()}>+</button>
                <button onClick={() => this.dec()}>-</button>
            </p>
        </div>
    )
}
 
}