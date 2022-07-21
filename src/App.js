import './App.less';
import React from 'react';
import {useNavigate} from 'react-router';


const App = () => {
  // useNavigate钩子返回一个函数，该函数允许您以编程方式进行导航
  const navigate = useNavigate();
  function navigateToUser() {
    navigate('/user');
  }

  return (
    <>
      <button onClick={navigateToUser}>跳转到/user</button>
    </>
  );
};
export default App;
