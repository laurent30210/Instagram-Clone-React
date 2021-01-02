/* eslint-disable linebreak-style */
// == Import npm
import React from 'react';

// == Import components
import Users from 'src/components/Users';
import ProposalUsers from 'src/components/ProposalUsers';
// == Import
import './bodyRight.scss';
import usersArray from 'src/utils/users';

// == Composant
const BodyRight = () => (
  <div className="bodyRight">
    <section className="user">
      <Users user={{ id: 8, name: 'trailAndCode', avatar: 'https://i1119.photobucket.com/albums/k633/Melle_Dubndidu/Look%202013%202/conseildebuterlacoursepiedrunning2_zps7fccc13e.jpg' }} />
    </section>
    <section className="proposalUsers">
      <h2>Suggestions pour vous</h2>
      {usersArray.map((user) => (
        <ProposalUsers user={user} key={user.id} />
      ))}
    </section>
    <section className="infos">
      <p>
        <a>A-propos</a>
        .
        <a>Aide</a>
        .
        <a>Presse</a>
        .
        <a>API</a>
        .
        <a>Emplois</a>
        .
        <a>Confidentialité</a>
        .
        <a>Conditions</a>
        .
        <a>Lieux</a>
        .
        <a>Comptes principaux</a>
        .
        <a>Hashtags</a>
        .
        <a>Langue</a>
        .
      </p>
    </section>
    <section className="copyright">
      <span>© 2021 Instagram par Facebook</span>
    </section>
  </div>
);

// == Export
export default BodyRight;
