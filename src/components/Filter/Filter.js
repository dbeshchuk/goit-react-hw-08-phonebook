import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/reducer";
import { Input } from "@material-ui/core";

const Filter = () => {
  const { filter } = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name:
      <Input
        label="Search"
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => {
          dispatch(setFilter(e.target.value));
        }}
        className="filter-input"
        variant="Outlined"
      />
    </label>
  );
};

export default Filter;
