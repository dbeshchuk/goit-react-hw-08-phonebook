import React, { useEffect, useState } from "react";
import ContactItem from "../ContactItem/ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredContacts } from "../../app/selectors";
import { deleteItem } from "../../app/reducer";
import { deleteContact, getContacts } from "../../app/operations";
import { List } from "@material-ui/core";
import Loader from "react-loader-spinner";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
};

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  const [loader, setLoader] = useState(false);

  const loadContacts = async () => {
    setLoader(true);
    await dispatch(getContacts());
    setLoader(false);
  };

  useEffect(() => {
    loadContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
    dispatch(deleteItem(id));
  };

  return (
    <>
      <List style={styles.container}>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteClick={(e) => onDeleteContact(e.currentTarget.id)}
          />
        ))}
      </List>

      {loader && <Loader type="Oval" color="#3f51b5" height={40} width={40} />}
    </>
  );
};

export default ContactsList;
