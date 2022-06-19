import React, {Component} from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props); // 子类中调用父类构造函数
    // 方法2
    this.handleClick=this.handleClick.bind(this);
  }
  doSomething() {

  }
  // 方法3，推荐使用，箭头函数的this总是指向定义时的对象，而不是运行时
  handleClick=(e)=>{
    console.log(e);
    this.doSomething(); // 报错，会说找不到这个方法
  };
  render() {
    return (
      <div>
        {/* 方法1*/}
        <button onClick={this.handleClick.bind(this)}>
            header
        </button>
      </div>
    );
  }
}

export default ListItem;
