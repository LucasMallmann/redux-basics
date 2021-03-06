import React, { Component } from "react";

import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={this.props.onAddCounter}
        />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubCounter}
        />

        <hr />

        <button onClick={this.props.onStoreResult}>Store Results</button>
        
        <ul>

          {this.props.storedResults.map(result => {
            return (
              <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
            );
          })}
        </ul>

      </div>
    );
  }
}

// Retonar propriedades que contém referencia para uma função
// Essa função será executada para despachar uma ação
// Recebe como param o dispatch, que é uma função que será executada
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAddCounter: () => dispatch({type: 'ADD', value: 5}),
    onSubCounter: () => dispatch({type: 'SUB', value: 5}),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: (elementId) => dispatch({
      type: 'DELETE_RESULT', 
      resultElementId: elementId
    }),
  };
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    storedResults: state.results
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
