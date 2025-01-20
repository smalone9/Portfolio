import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

// Header component function
const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Samantha MacKenzie" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Samantha MacKenzie"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
            "Fullstack Developer",
            "Eager to Learn More",
            "Hire Me Today!",
          ]}
          typeSpeed={50}
          backSpeed={65}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;

// Css styles Material UI styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "teal",
  },
  subtitle: {
    color: "lightBlue",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));
