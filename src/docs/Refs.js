import React, {
  Component,
  createRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

/**
 * 在 React 中 ref 被用来给元素或子组件注册引用信息。
 * 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；
 * 如果用在子组件上，引用就指向组件实例。
 *
 * 在类组件中可以通过this.xxxRef.xxx的形式调用子组件的方法
 *
 * 子组件为函数式组件不可直接挂载 ref 可以通过 forwardRef 进行转发之后
 * 同时通过 useImperativeHandle 把需要父组件调用的方法暴露出去之后
 *
 * React 定义 ref 的方式有很多，可以通过 createRef、useRef 或者回调的方式创建。
 * 通过 createRef、useRef 创建的ref我们需要通过.current获取，通过回调函数方式创建的ref则可以直接获取。
 */

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = createRef();
  }

  componentDidMount() {
    console.log(this.textInput);
    this.textInput.current.focusTextInput();
  }

  handleClick() {
    console.log(888);
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <>
        <CustomTextInput
          title={'title'}
          ref={this.textInput}/>
        <button onClick={this.handleClick.bind(this)}>click</button>
      </>
    );
  }
}

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    console.log(this.textInput);
    this.textInput.current.focus();
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input
          type="text"
          ref={this.textInput}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

const Parents = (x) => {
  const ref = useRef();

  const click = () => {
    ref.current.handleClick();
  };
  return <>
    <Son ref={ref}/>
    <button onClick={click}>
            Parents
    </button>
  </>;
};
const Son = forwardRef((x, ref) => {
  useImperativeHandle(ref, () => ({
    handleClick,
  }));
  const handleClick = () => {
    console.log('Son');
  };
  return <>
    <button ref={ref}>
            Son
    </button>
  </>;
});
Son.displayName = 'Son';


export default {Parents, AutoFocusTextInput};
