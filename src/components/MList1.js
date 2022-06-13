import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlineReload } from "react-icons/ai";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function MList1() {
  
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="p"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center", fontSize: "14px" }}
            >
              Your recent Orders
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AiOutlineReload size={20} />
            </IconButton>{" "}
          </Toolbar>
        </AppBar>
      </Box>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {[0, 1, 2, 3, 4].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              {[0, 1, 2].map((item) => (
                <ListItem key={`item-${item}-${sectionId}`}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="." />
                  </ListItemAvatar>
                  <ListItemText
                  style={{marginRight: "10px"}}
                    primary="Brunch ?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                          fontSize={12}
                        >
                        {" — I'll be in your neighborhood doing errands this…"}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <ListItemIcon>
                    <DeleteIcon />
                  </ListItemIcon>
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </React.Fragment>
  );
}
