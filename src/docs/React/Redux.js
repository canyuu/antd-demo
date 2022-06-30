import React, {Component} from 'react';
import {createStore} from 'redux';


/**
 * store 存放数据的仓库;
 * state 数据的仓库当中存储的数据;
 * action 对象:
 * dispatch store.dispatch(action)
 * reducer 函数:
 */


/**
 * Store 中保存的是全局数据，对于Redux项目来说有且只有一个Store，我们可以把它看做一个带有推送功能的数据仓库。
 * 我们可以借用微信的朋友圈来理解这个概念。
 * 比如你加了某个人的好友，只要这个人一发朋友圈他的状态就会马上推送到你。
 * 加好友就是数据订阅，发朋友圈就是数据推送。
 *
 * Reducer是帮助Store处理数据的方法，他是一个方法是一个过程是一个函数不是一个具体存在的对象，
 * Reducer可以帮助Store初始化数据，修改数据，删除数据，
 * 你可能会好奇我们为什么要使用 Reducer 这么麻烦的方式来处理数据而不是直接在Store中进行修改，
 * 其实原因也很简单。比如你看到你朋友的朋友圈有错别字，你是没办法直接修改它的朋友圈状态的。

 * 任何UI级别的组件都没有权限修改Store中的数据，
 * 根据数据单向流动的原则他们是只读不能写的，
 * 你只能给他打电话或者发短通知他让他来修改，他修改后会从新推送给你。
 * 给他打电话或者发短信通知他就是Action，
 * 给他打电话或者发短信通知他的这个过程就是dispatch Action消息的分发。
 * 他自己修改朋友圈的过程就是reducer。
 * 最后他修改好之后微信会从新将消息通送给你，这就是订阅和推送。
 */
const ADD = 'ADD';
const MINUS = 'MINUS';
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return {number: state.number + 1};
    case MINUS:
      return {number: state.number - 1};
    default:
      return state;
  }
};
const initState = {number: 0};
const store = createStore(reducer, initState);


export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(
        () => this.setState({number: store.getState().number}),
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => store.dispatch({type: 'ADD'})}>+</button>
        <button onClick={() => store.dispatch({type: 'MINUS'})}>-</button>
        <button onClick={
          () => {
            setTimeout(() => {
              store.dispatch({type: 'ADD'});
            }, 1000);
          }
        }>1秒后加1</button>
      </div>
    );
  }
}
