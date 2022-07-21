import React, {Component} from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props); // 子类中调用父类构造函数
    this.state={
      count: 1,
    };
  }

  handleClick=(id, e)=>{
    console.log(id);
    console.log(e);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this, 1)}>header1</button>
        <button onClick={()=>this.handleClick(2)}>header2</button>
        <button onClick={(e)=>this.handleClick(3, e)}>header3</button>
      </div>
    );
  }
}

export default ListItem;
