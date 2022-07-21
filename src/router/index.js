import React from 'react';
import {useRoutes} from 'react-router-dom';
import User from '../components/User/User';
import Profile from '../components/User/Profile';
import UserAdd from '../components/User/UserAdd';
import UserDetail from '../components/User/UserDetail';
import UserList from '../components/User/UserList';
import NotFound from '../components/GlobalPage/NotFound';
import App from '../App';

/**
 * useRoutes钩子在功能上等同于Routes，
 * 但它使用JavaScript对象而不是Route元素来定义路由
 * 这些对象与普通Route元素具有相同的属性，但它们不需要JSX
 */

// Link作为路由跳转
// <ul>
//   <li><Link to="/">Home</Link></li>
//   <li><Link to="/user">User</Link></li>
//   <li><Link to="/profile">Profile</Link></li>
// </ul>

// Routes 方式配置路由 Route
// import User from './components/User/User';
// import UserAdd from './components/User/UserAdd';
// import UserList from './components/User/UserList';
// import UserDetail from './components/User/UserDetail';

{/* <Routes>*/}
{/*  <Route path="/" element={<App/> } />*/}
{/*  <Route path="/user" element={<User />} >*/}
{/*    <Route path="add" element={<UserAdd />} />*/}
{/*    <Route path="list" element={<UserList />} />*/}
{/*    <Route path="detail/:id" element={<UserDetail />} />*/}
{/*  </Route>*/}
{/* </Routes>*/}

const routes = [
  {path: '/', element: <App />},
  {path: '/profile', element: <Profile />},
  {
    path: 'user',
    element: <User />,
    children: [
      {path: 'add', element: <UserAdd />},
      {path: 'list', element: <UserList />},
      {path: 'detail/:id', element: <UserDetail />},
    ],
  },
  // 404找不到
  {path: '*', element: <NotFound />},
];

export const Router = () => {
  return useRoutes(routes);
};
export default {routes, Router};
