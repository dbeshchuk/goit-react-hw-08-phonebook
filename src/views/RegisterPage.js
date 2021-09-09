import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/operations";
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

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(register({ name, email, password })).catch((error) =>
      console.log(error.message)
    );
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          style={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          variant="outlined"
          size="small"
          style={styles.input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          variant="outlined"
          size="small"
          style={styles.input}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          pattern="[0-9a-fA-F]{8,16}"
        />

        <Button type="submit" color="primary" variant="contained" size="small">
          Register
        </Button>
      </form>
    </>
  );
};

export default RegisterPage;
