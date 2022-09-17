import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material/";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { makeStyles } from "tss-react/mui";
import { likePost, deletePost } from "../../../actions/posts";

const useStyles = makeStyles()((theme) => {
  return {
    media: {
      height: 0,
      paddingTop: "56.25%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backgroundBlendMode: "darken",
    },
    border: {
      border: "solid",
    },
    fullHeightCard: {
      height: "100%",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "15px",
      height: "100%",
      position: "relative",
    },
    overlay: {
      position: "absolute",
      top: "20px",
      left: "20px",
      color: "white",
    },
    overlay2: {
      position: "absolute",
      top: "20px",
      right: "20px",
      color: "white",
    },
    grid: {
      display: "flex",
    },
    details: {
      display: "flex",
      justifyContent: "space-between",
      margin: "20px",
    },
    title: {
      padding: "0 16px",
    },
    cardActions: {
      padding: "0 16px 8px 16px",
      display: "flex",
      justifyContent: "space-between",
    },
  };
});

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" /> 
          &nbsp; Like &nbsp;
          {post.likeCount}{" "}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
