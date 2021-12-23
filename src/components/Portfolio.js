import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import musePal from "../images/muse-pal.PNG";
import petSitting from "../images/pet-sitting.PNG";
import nutriJam from "../images/NutriJamScreenshot.PNG";

// project information
const projects = [
  {
    name: "Muse Pal",
    description: `MusePal is a modern music app that lets you search a song and returns the lyrics of the song with an associated GIF. This app provides a platform for music lovers to explore the complexities of their favorite songs. Have you ever had a song stuck in your head but can’t think of the lyrics? Check out MusePal.`,
    image: musePal,
    link: "https://mavila6.github.io/muse-pal/",
    gitLink: "https://github.com/smalone9/muse-pal",
  },
  {
    name: "Pet Sitting",
    description: `An amazing website for all of your pets needs! Sign up or Log in to find available pet sitters or available volunteer options, including grooming, walking, and boarding.`,
    image: petSitting,
    link: "https://rockstars-pet-sitting.herokuapp.com/",
    gitLink: "https://github.com/smalone9/pet-sitting",
  },
  {
    name: "NutriJAM",
    description: `A web application that allows users to search for recipes within a secure platform.`,
    image: nutriJam,
    link: "https://nutri-jam.herokuapp.com/",
    gitLink: "https://github.com/smalone9/nutri-jam",
  },
];

// portfolio component function
const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="musePal"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href={project.link}>
                  <Button size="small" color="primary">
                    Visit Site
                  </Button>
                </a>
                <a href={project.gitLink}>
                  <Button size="small" color="primary">
                    GitHub Link
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;

// css using material ui styles
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#078",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));
