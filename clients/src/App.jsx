import { React, useEffect, useState } from "react";
import { Container,  Typography, Grow, Grid } from "@mui/material";


import { getPosts } from "./actions/posts";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import { makeStyles } from "tss-react/mui";
import { useDispatch } from "react-redux";

const useStyles = makeStyles()((theme) => {
  return {
    [theme.breakpoints.down('sm')]: {
      mainContainer: {
        flexDirection: 'column-reverse',
      },
    },
    appBar: {
      borderRadius: 15,
      height: "100px",
      backgroundColor: "#efefef",
      margin: "30px 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    heading: {
      color: "rgba(0,183,255, 1)",
    },
    image: {
      marginLeft: "15px",
    },
     
  };
});

const App = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
