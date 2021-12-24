import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";

// project information
const contacts = [
  {
    name: "sammac99@gmail.com",
    description: `Contact me through Email, LinkedIn, or Facebook Today!`,
    linkedIn: "https://www.linkedin.com/in/samantha-malone-10713467/",
    gitHub: "https://github.com/smalone9",
    facebook: "https://www.facebook.com/samantha.mackenzie.334/",
  },
];

// Contact component function
const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* contacts */}
        {contacts.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                  <TextField
                    fullWidth={true}
                    label="Name or Company"
                    variant="outlined"
                    inputProps={{ className: classes.input }}
                  />
                  <TextField
                    fullWidth={true}
                    label="Preferred Contact (Email address, Phone Number, Link, etc.)"
                    variant="outlined"
                    inputProps={{ className: classes.input }}
                    className={classes.field}
                  />
                  <TextField
                    fullWidth={true}
                    label="How Can I Help You?"
                    variant="outlined"
                    multiline
                    rows={4}
                    inputProps={{ className: classes.input }}
                  />
                  <Button
                    variant="outlined"
                    fullWidth={true}
                    endIcon={<Send />}
                    className={classes.button}
                    href={`mailto:sammac99@gmail.com`}
                  >
                    Contact Me
                  </Button>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href={project.linkedIn}>
                  <Button size="small" color="primary">
                    LinkedIn
                  </Button>
                </a>
                <a href={project.gitHub}>
                  <Button size="small" color="primary">
                    GitHub
                  </Button>
                </a>
                <a href={project.facebook}>
                  <Button size="small" color="primary">
                    Facebook
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

export default Contact;

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
