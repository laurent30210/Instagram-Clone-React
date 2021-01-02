/* eslint-disable linebreak-style */
// == Import npm
import React from 'react';

// == Import component
import IconOption from 'src/components/IconOption';

// == Import
import './header.scss';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

// == Composant
const Header = () => (
  <div className="header">
    <div className="header__left">
      <img src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png" alt="Logo instagram" />
    </div>
    <div className="header__searchBar">
      <SearchIcon className="header__searchBar__icon" color="disabled" />
      <input
        className="header__searchBar__input"
        type="text"
        placeholder="Rechercher"
      />
    </div>
    <div className="header__iconsOption">
      <IconOption Icon={HomeIcon} />
      <IconOption Icon={SendOutlinedIcon} />
      <IconOption Icon={ExploreOutlinedIcon} />
      <IconOption Icon={FavoriteBorderIcon} />
      <IconOption avatar="https://cdnb.artstation.com/p/assets/images/images/009/836/467/large/maria-bo-schatzis-stream-profilpicture.jpg?1521139318" />
    </div>
  </div>
);

// == Export
export default Header;
