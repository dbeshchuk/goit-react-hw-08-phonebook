import React from "react";
import PropTypes from "prop-types";
import { ListItem, IconButton } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  item: {
    width: 200,
  },
};

const ContactItem = ({ id, name, number, onDeleteClick }) => (
  <ListItem style={styles.item}>
    <ListItemText primary={name} secondary={number} />

    <IconButton onClick={onDeleteClick} id={id} color="secondary" size="small">
      <DeleteIcon />
    </IconButton>
  </ListItem>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
};

export default ContactItem;
