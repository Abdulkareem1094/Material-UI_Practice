import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardAction,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const App = () => {
  return (
    <>
      <CssBaseline />
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
            <div>
              <Grid Container spacing={2} align="center">
                <Grid item style={{padding:'none'}} style={{backgroundColor:'red'}}>
                  <Button variant="contained" color="primary">
                    See Photos
                  </Button>
                </Grid>
                <Grid item style={{padding:'none'}}>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
