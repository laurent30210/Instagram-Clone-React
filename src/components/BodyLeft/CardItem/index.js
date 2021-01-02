/* eslint-disable linebreak-style */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';// == Import
import './cardItem.scss';

// == Composant
const CardItem = ({ url }) => (
  <Card className="root">
    <CardHeader
      avatar={(
        <Avatar src="https://www.toutletrail.com/wp-content/uploads/2019/05/trail.jpg" aria-label="recipe" />
      )}
      action={(
        <IconButton aria-label="settings">
          <MoreHorizIcon />
        </IconButton>
      )}
      title="TrailAndCode"
      subheader="Gard"
    />
    <CardMedia
      className="media"
      image={url}
      title="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum passages.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteBorderOutlinedIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ChatBubbleOutlineOutlinedIcon />
      </IconButton>
      <IconButton>
        <SendOutlinedIcon />
      </IconButton>
    </CardActions>
  </Card>
);

// == Export
export default CardItem;
