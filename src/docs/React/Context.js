import React from 'react';


const ThemeContext = React.createContext('');
console.log(ThemeContext);

/**
 * 创建Context后的两种子组件消费方式
 * 1.Consumer组件的方式
 * const ThemeContext = React.createContext('');
 * const {Provider, Consumer} = ThemeContext;
 * 子组件
 * <Consumer>
 {
        (contextValue) => {
        function...
          return <div>
            element...
          </div>;
        }
      }
 </Consumer>
 *
 * 2.contextType方式
 * 子组件
 * static contextType = ThemeContext;
 *
 */

const {Provider, Consumer} = ThemeContext;
const style = {margin: '5px', padding: '5px'};
function Title(props) {
  console.log('Title');
  return (
    <Consumer>
      {
        (contextValue) => (
          <div style={{...style, border: `5px solid ${contextValue.color}`}}>
                Title
          </div>
        )
      }
    </Consumer>
  );
}
class Header extends React.Component {
  static contextType = ThemeContext;
  render() {
    console.log('Header');
    return (
      <div style={{...style, border: `5px solid ${this.context.color}`}}>
          Header
        <Title />
      </div>
    );
  }
}
function Content() {
  console.log('Content');
  return (
    <Consumer>
      {
        (contextValue) => {
          console.log(contextValue);
          return <div style={{...style,
            border: `5px solid ${contextValue.color}`}}>
            Content
            <button
              style={{color: 'red'}}
              onClick={() => contextValue.changeColor('red')}>变红</button>
            <button
              style={{color: 'green'}}
              onClick={() => contextValue.changeColor('green')}>变绿</button>
          </div>;
        }
      }
    </Consumer>
  );
}
class Main extends React.Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    console.log('Main');
    return (
      <div style={{...style, border: `5px solid ${this.context.color}`}}>
          Main
        <Content />
      </div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'black'};
  }
  changeColor = (color) => {
    this.setState({color});
  };
  render() {
    console.log('Page');
    const contextValue = {
      color: this.state.color,
      changeColor: this.changeColor};
    return (
      <Provider value={contextValue}>
        <div
          style={{...style,
            width: '250px',
            border: `5px solid ${this.state.color}`}}>
            Page
          <Header />
          <Main />
        </div>
      </Provider >
    );
  }
}

export default Page;
