import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SendAndArchiveOutlinedIcon from "@mui/icons-material/SendAndArchiveOutlined";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "darkgreen",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
});

export default function Notes() {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
      >
        Create a new note
      </Typography>

      <Button
        className={classes.btn}
        type="submit"
        variant="contained"
        color="secondary"
        onClick={() => console.log("clicked")}
        startIcon={<SendAndArchiveOutlinedIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
