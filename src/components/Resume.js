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

// resume information
const abouts = [
  {
    name: "Samantha Malone",
    description: `Certified Full Stack Web Developer, educated at University of Arizona's Trilogy Coding Bootcamp. Skills in HTML, CSS, Javascript, MySql, Express, Node, OOP, ORM, MVC, and strengths in meeting deadlines, communication, teamwork, and innovation. Successfully designed and refactored multiple websites. Known as an energetic problem solver passionate about developing apps, with a focus on mobile responsiveness. My goal is to ensure users never want to leave the site. Positioned well to provide insight on how users interact with websites and applied front and back-end skills to create a React application that helps users find and save recipes.`,
    // image: musePal,
    resume:
      "https://docs.google.com/document/d/1JHZFdpOJL2Ob6_lCGtYMG7i4g7apa13uSAu86a8yGDk/edit?usp=sharing",
    pdf: "https://drive.google.com/file/d/1oqFqfY8PBHws4Z2-lSZVz_RGzJ_skk7b/view?usp=sharing",
  },
];

// resume component function
const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* about me */}
        {abouts.map((about, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  alt="musePal"
                  height="140"
                  image={about.image}
                /> */}
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {about.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {about.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href={about.resume}>
                  <Button size="small" color="primary">
                    View on Google Drive
                  </Button>
                </a>
                <a href={about.pdf}>
                  <Button size="small" color="primary">
                    View as PDF
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

export default Resume;

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
