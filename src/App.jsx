import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardAction,
  CardContent,
  CardMedia,
  CssBaseLine,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const App = () => {
  return (
    <>
      <CssBaseLine />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Albom
            </Typography>
            <Typography variant="h5" color="textSecondary" align="center">
              Hello evaryone! This is a Photo Albom, I am trying to make this
              sentence as long as posible so we can see how it looks on the
              screen.
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
