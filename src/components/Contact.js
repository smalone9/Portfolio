import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";

// resume information
const contacts = [
  {
    name: "contact information",
    description: `Email: sammacc99@gmail.com`,
    linkedIn: "https://www.linkedin.com/in/samantha-malone-10713467/",
    gitHub: "https://github.com/smalone9",
  },
];

// Contact Component Function
const Contact = () => {
  const classes = useStyles();
  return (
    // Page Display and Text Fields
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Contact Samantha Malone Now!
          </Typography>
          <InputField
            fullWidth={true}
            label="Name or Company"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label="Preferred Contact (Email address, Phone Number, Link, etc.)"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
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
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;

// Css Design implemented with Material UI Styles
const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#0144",
    height: "100vh",
  },
  heading: {
    color: "black",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "teal",
    borderColor: "teal",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "teal",
    },
    "& label": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "teal",
      },
      "&:hover fieldset": {
        borderColor: "lightBlue",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "lightBlue",
      },
    },
  },
})(TextField);
