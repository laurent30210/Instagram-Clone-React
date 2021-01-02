/* eslint-disable linebreak-style */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './iconOption.scss';
import { Avatar } from '@material-ui/core';

// == Composant
const IconOption = ({ Icon, avatar }) => (
  <div className="iconOption">
    {Icon && <Icon style={{ fontSize: 30 }} className="iconOption__icon" />}
    {avatar && <Avatar src={avatar} className="iconOption__avatar" />}
  </div>
);
IconOption.propTypes = {
  Icon: PropTypes.object.isRequired,
  avatar: PropTypes.string.isRequired,
};
// == Export
export default IconOption;
