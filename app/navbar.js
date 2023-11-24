import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Tabs sx={{ marginLeft: "auto" }} textColor="inherit">
            <Tab label="users" href="/users" className="tab" />
            <Tab label="roles" href="/roles" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
