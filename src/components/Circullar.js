import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { FiEdit } from "react-icons/fi";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        size={80}
        color={props.clr}
        thickness={10}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
  default: 45,
};

export default function CircularStatic() {
  return (
    <React.Fragment>
      <Box>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="default"
              aria-label="menu"
              sx={{ mr: 2, height: "30px" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="p"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center", fontSize: "14px" }}
            >
              Progress Towards Goals
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FiEdit size={20} />
            </IconButton>{" "}
          </Toolbar>
        </AppBar>
      </Box>
      <Divider />
      <Grid container style={{ marginTop: 10 }} space={2}>
        <Grid item xs={12} md={4} lg={3}>
          <Typography variant="p" component="h5" color="text.secondary">
            Have 100,000 Users
          </Typography>
          <Typography variant="caption" component="div" color="text.secondary">
            Estimated time ~ 3 months
          </Typography>
        </Grid>
        {/*  */}
        <Grid item xs={12} md={4} lg={3}>
          <CircularProgressWithLabel value={76} clr="warning" />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Typography variant="p" component="h5" color="text.secondary">
            Lower bounce rate to 10%
          </Typography>
          <Typography variant="caption" component="div" color="text.secondary">
            Estimated time ~ 3 hours
          </Typography>
        </Grid>
        {/*  */}
        <Grid item xs={12} md={4} lg={3}>
          <CircularProgressWithLabel value={45} />
        </Grid>
      </Grid>
      <Divider />
      <Grid container style={{ marginTop: 30 }}>
        <Grid item xs={12} md={4} lg={6}>
          <Typography variant="p" component="h5" color="text.secondary">
            Todoay's Goal
          </Typography>
          <LinearProgress value={76} color="primary" style={{marginRight:10}} />
        </Grid>
        {/*  */}

        <Grid item xs={12} md={4} lg={6}>
          <Typography variant="p" component="h5" color="text.secondary">
            Yesterday's Goal
          </Typography>
          <LinearProgress value={76} color="warning" />
        </Grid>
        {/*  */}
      </Grid>
    </React.Fragment>
  );
}
