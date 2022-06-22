import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import actions from '../../actions/counter1';
import store from '../../store';
const boundActions = bindActionCreators(actions, store.dispatch);
import {connect} from 'react-redux';

class Counter1 extends Component {
  unsubscribe;
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(
        () => this.setState({number: store.getState().counter1.number}));
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={boundActions.add1}>+</button>
        <button onClick={boundActions.minus1}>-</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return state.counter1;
};
export default connect(
    mapStateToProps,
    actions,
)(Counter1);
