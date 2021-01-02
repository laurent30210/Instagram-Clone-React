/* eslint-disable linebreak-style */
// == Import npm
import React from 'react';

// == Import components
import Header from 'src/components/Header';
import BodyLeft from 'src/components/BodyLeft';
import BodyRight from 'src/components/BodyRight';
// == Import
import './app.scss';
import users from 'src/utils/users';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <div className="body">
      <BodyLeft listUsers={users} />
      <BodyRight />
    </div>
  </div>
);

// == Export
export default App;
