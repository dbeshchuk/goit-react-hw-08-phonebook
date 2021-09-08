import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, postContact } from "../../app/operations";
import { TextField, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  form: {
    width: 320,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 60,
    marginBottom: 50,
  },
  input: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.contacts);

  async function formSubmit(e) {
    e.preventDefault();

    const newContact = { name: name, number: number };

    items.some((item) => item.name === name)
      ? alert(`${name} is already in contacts`)
      : await dispatch(postContact(newContact));

    dispatch(getContacts());

    setName("");
    setNumber("");
  }

  return (
    <form onSubmit={formSubmit} className="contact-form" style={styles.form}>
      <TextField
        label="Name"
        variant="outlined"
        size="small"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        style={styles.input}
      />

      <TextField
        className="number-input"
        label="Number"
        variant="outlined"
        size="small"
        type="tel"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        style={styles.input}
      />

      <Button
        type="submit"
        size="small"
        color="primary"
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add to contacts
      </Button>
    </form>
  );
};

export default ContactForm;
