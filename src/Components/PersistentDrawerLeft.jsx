// import * as React from 'react';
// import { css } from '@emotion/react';
import { styled, useTheme } from "@mui/material/styles";
import FlagIcon from "@mui/icons-material/Flag";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MailList from "./MailList";
import MailData from "./MailData";
import { useDispatch, useSelector } from "react-redux";
import { inbox, spam,deleted,flagged } from "../Redux/action";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const dispatch = useDispatch();
  // useEffect()
  function handleInbox() {
    dispatch(inbox());
  }
  function handleSpam() {
    dispatch(spam());
  }
  function handleFlagged() {
    dispatch(flagged());
  }
  function handleDeleted() {
    dispatch(deleted());
  }
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  //

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="drawer-box"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ul className="mail-folder">
          <li onClick={handleInbox}>
            <InboxIcon />
            &nbsp;&nbsp;Inbox
          </li>
          <li onClick={handleSpam}>
            <MailIcon />
            &nbsp;&nbsp;Spam
          </li>
          <li onClick={handleDeleted}>
            <DeleteIcon />
            &nbsp;&nbsp;Deleted
          </li>
          <li onClick={handleFlagged}>
            <FlagIcon />
            &nbsp;&nbsp;Flagged
          </li>
        </ul>
      </List>
    </Box>
  );

  return (
    <div className="main-container">
      <div className="nav">
        <div className="left">
          {["left"].map((anchor) => (
            <React.Fragment className="bar-icon" key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
        <div className="right">
        <img src="https://www.nicepng.com/png/detail/770-7706476_logo-outlook-microsoft-exchange-server-logo.png" alt="Logo Outlook - Microsoft Exchange Server Logo@nicepng.com" />
        </div>
      </div>
      <div className="container">
        <div className="container-left">
          <MailList/>
        </div>
        <div className="container-right">
          <MailData/>
        </div>
      </div>
    </div>
  );
}
