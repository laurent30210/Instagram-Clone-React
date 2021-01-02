/* eslint-disable linebreak-style */
// == Import npm
import React from 'react';

// == Import components
// == Import
import './proposalUsers.scss';

// == Composant
const ProposalUsers = ({ user }) => (
  <section className="container">
    <div className="proposalUser">
      <div className="proposalUser__avatar">
        <img className="proposalUser__avatar__img" src={user.avatar} alt={user.name} />
      </div>
      <div className="proposalUser__name">
        <h3 className="proposalUser__name__content">{user.name}</h3>
        <span className="proposalUser__name__link">Follows you</span>
      </div>
    </div>
    <span className="userLink">S'abonner</span>
  </section>
);

// == Export
export default ProposalUsers;
