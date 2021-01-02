/* eslint-disable linebreak-style */
// == Import npm
import React from 'react';

// == Import components
// == Import
import './users.scss';

// == Composant
const Users = ({ user }) => (
  <div className="users">
    <section>
      <div className="user">
        <div className="user__avatar">
          <img className="user__avatar__img" src={user.avatar} alt={user.name} />
        </div>
        <h3 className="user__name">{user.name}</h3>
      </div>
    </section>
    <span className="userLink">Basculer</span>
  </div>
);

// == Export
export default Users;
