import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
      { id: 4, value: 1 },
    ],
  };

  constructor() {
    super();
    console.log("App-constructor");
    //this.state - this.props.something, can assign directly, but need to pass props as parameter first;
  }

  componentDidMount() {
    console.log("App-mounted");
    // can make Ajax Call here, once after the component is mounted.
  }

  // this approach is created by Eric
  // handleIncrement =(counter) => {
  //     const counters = this.state.counters.map( c => {
  //         if( c.id == counter.id){
  //             c.value += 1
  //         }
  //      } )
  //      this.setState( counters );
  // }

  // this approach is created by Eric
  // handleUpdateTotal = () => {
  //     const counters = [...this.state.counters];
  //     let total = 0;
  //     counters.map(c => total += c.value)
  //     this.setState({ total });
  // }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState( { counters: counters } ); make the original counters array equal to new array, as their names are the same, can simplify as below expression.
    this.setState({ counters });
  };

  render() {
    console.log("App-Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
