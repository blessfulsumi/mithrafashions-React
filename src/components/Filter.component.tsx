import React from "react";

const FilterComponent = () => {
  return (
    <div>
      <label htmlFor="items">category:</label>

      <select name="items" id="items">
        <option value="Ethnic">Ethnic</option>
        <option value="Western">Western</option>
        <option value="Kids">Kids</option>
        <option value="Women">Women</option>
      </select>
      <hr></hr>
    </div>
  );
};

export default FilterComponent;
