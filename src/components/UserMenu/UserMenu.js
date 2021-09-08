import { useDispatch, useSelector } from "react-redux";
import { getEmail } from "../../app/selectors";
import { logout } from "../../app/operations";
import { Button } from "@material-ui/core";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: 10,
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getEmail);

  function onClick() {
    dispatch(logout());
  }

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {email}</span>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={onClick}
      >
        Logout
      </Button>
    </div>
  );
}
