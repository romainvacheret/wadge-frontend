import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import NavBar from "components/NavBar/NavBar";


const NavBarLayout = ({ children }) => {
  return (
    <Box>
        <NavBar></NavBar>
      {children}
    </Box>
  );
};

export default NavBarLayout;

NavBarLayout.propTypes = {
  children: PropTypes.node,
};
