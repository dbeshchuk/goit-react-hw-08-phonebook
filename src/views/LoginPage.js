import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/operations";
import { TextField, Button } from "@material-ui/core";

const styles = {
  form: {
    width: 320,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 50,
  },
  input: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          label="Email"
          variant="outlined"
          size="small"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          style={styles.input}
        />

        <TextField
          label="Password"
          variant="outlined"
          size="small"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          style={styles.input}
        />

        <Button type="submit" color="primary" variant="contained" size="small">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
