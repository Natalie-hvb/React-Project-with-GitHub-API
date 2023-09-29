import React from 'react';

function User({ userModel }) {
  if (!userModel) {
    return <h3>User not found</h3>;
  }

  return (
    <div id="user-model">
      <div id="image">
        {userModel.avatar_url && <img src={userModel.avatar_url} alt={userModel.login} width="250" height="250" />}
      </div>
      <div id="description">
        <ul>
          <li>
            <p>Full Name: </p>
            {userModel.name}
          </li>
          <li>
            <p>Username: </p>
            {userModel.login}
          </li>
          <li>
            <p>Location: </p>
            {userModel.location}
          </li>
          <li>
            <p>Email Address: </p>
            {userModel.email}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default User;

