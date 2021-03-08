import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 1 },
            { id: 2, value: 1 },
            { id: 3, value: 1 },
            { id: 4, value: 1 },
        ],
    }

    handleReset = () => {

        const counters = this.state.counters.map( c => { 
            c.value = 0;
            return c;
         });
         this.setState({ counters })
    }

    handleDelete =(counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        // this.setState( { counters: counters } ); make the original counters array equal to new array, as their names are the same, can simplify as below expression.
        this.setState( { counters } );
    }

    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m2">Reset</button>
                { this.state.counters.map(counter => 
                <Counter key={counter.id} counter={counter} onDelete={this.handleDelete} onReset={this.handleReset1} onReset2={this.handleReset2}>
                </Counter>)}
            </div>
            );
    }
}

export default Counters;