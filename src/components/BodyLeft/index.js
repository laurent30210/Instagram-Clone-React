/* eslint-disable linebreak-style */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CardItem from 'src/components/BodyLeft/CardItem';

import './bodyLeft.scss';

// == Composant
const BodyLeft = ({ listUsers }) => (
  <section className="bodyLeft">
    <div className="slideSubscribers">
      <div className="subscribers">
        <ArrowBackIosIcon fontSize="small" className="arrow arrowLeft" />
        {listUsers.map((user) => (
          <div className="subscriber">
            <div className="subscriber__avatar">
              <img className="subscriber__avatar__img" src={user.avatar} alt={user.name} />
            </div>
            <h3 className="subscriber__name">{user.name}</h3>
          </div>
        ))}
        <ArrowForwardIosIcon fontSize="small" className="arrow arrowRight" />
      </div>
    </div>
    <div className="posts">
      <CardItem url="https://besancon.placedulocal.fr/media/cache/big/uploads/images/f74cccb369015ca2b4b5d141f5d164fd.jpg" />
      <CardItem url="https://www.votrecoach.fr/wp-content/uploads/2019/03/190322_SVS_trail_shutterstock_703189510-copie.jpg" />
      <CardItem url="https://www.compagnie-chocolat.com/pub/media/catalog/category/lacompagnieduchocolat-9922-ok-2.jpg" />
    </div>

  </section>
);
BodyLeft.propTypes = {
  listUsers: PropTypes.object.isRequired,
};
// == Export
export default BodyLeft;
