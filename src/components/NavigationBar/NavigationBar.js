import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../app/selectors";
import UserMenu from "../UserMenu/UserMenu";
import { AppBar, Tabs, Tab } from "@material-ui/core";

const NavigationBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const styles = {
    container: {
      display: "flex",
      wrap: "nowrap",
    },
    activeButton: {
      fontWeight: "bold",
      borderBottom: "2px solid #f50057",
    },
    tabs: {
      variant: "standart",
    },
  };

  return (
    <AppBar position="static" style={styles.container}>
      <Tabs value={false} aria-label="navigarion tabs" style={styles.tabs}>
        <Tab
          label="Home"
          component={React.memo(NavLink)}
          to="/"
          exact
          activeStyle={styles.activeButton}
        />

        {isLoggedIn && (
          <Tab
            label="Contacts"
            component={React.memo(NavLink)}
            to="/contacts"
            activeStyle={styles.activeButton}
          />
        )}

        {!isLoggedIn && (
          <Tab
            label="Login"
            component={React.memo(NavLink)}
            to="/login"
            exact
            style={{ marginLeft: "auto" }}
            activeStyle={styles.activeButton}
          />
        )}

        {!isLoggedIn && (
          <Tab
            label="Register"
            component={React.memo(NavLink)}
            to="/register"
            activeStyle={styles.activeButton}
          />
        )}

        {isLoggedIn && <UserMenu />}
      </Tabs>
    </AppBar>
  );
};

export default NavigationBar;
