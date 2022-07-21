import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import UserAdd from './UserAdd';
import UserDetail from './UserDetail';
import UserList from './UserList';


function User() {
  return (
    <div>
      <ul>
        <li><Link to="add">添加用户</Link></li>
        <li><Link to="list">用户列表</Link></li>
      </ul>
      {/* <Outlet />*/}
      <Routes>
        <Route path="add" element={<UserAdd />} />
        <Route path="list" element={<UserList />} />
        <Route path="detail/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}
export default User;
