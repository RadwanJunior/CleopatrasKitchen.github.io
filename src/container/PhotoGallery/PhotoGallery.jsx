import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function getGridListCols(width) {
  if (isWidthUp('xl', width)) {
    return 3;
  }

  if (isWidthUp('lg', width)) {
    return 3;
  }

  if (isWidthUp('md', width)) {
    return 2;
  }

  return 1;
}

function PhotoGallery({ images, width }) {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');

  const handleImageClick = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} cols={getGridListCols(width)} spacing={15} className={classes.gridList}>
        {images.map((img, index) => (
          <GridListTile key={img.id} onClick={() => handleImageClick(index)}>
            <img src={img.url} alt={img.title} />
            <GridListTileBar
              title={img.title}
              actionIcon={
                <div>
                  <IconButton className={classes.icon} onClick={handleLike}>
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                  <IconButton className={classes.icon} onClick={handleDialogOpen}>
                    <CommentIcon />
                  </IconButton>
                  <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                    <DialogTitle>Comment</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Leave your comment about this photo
                      </DialogContentText>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Comment"
                        type="text"
                        fullWidth
                        value={comment}
                        onChange={handleCommentChange}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleDialogClose} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={handleDialogClose} color="primary">
                        Submit
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      {isLightboxOpen && (
        <Lightbox
          mainSrc={images[currentImage].url}
          nextSrc={images[(currentImage + 1) % images.length].url}
          prevSrc={images[(currentImage + images.length - 1) % images.length].url}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % images.length)
          }
        />
      )}
    </div>
  );
}

export default withWidth()(PhotoGallery);
