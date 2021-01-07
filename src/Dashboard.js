import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';

function Dashboard(props) {
  const user = sessionStorage.getItem('user');

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div>
      Welcome {user.username}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;
