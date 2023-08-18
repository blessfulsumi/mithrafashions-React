import React from "react";
import DividerComponent from "./Divider.component";

const FilterComponent = () => {
  return (
    <div className="m-4">
      <div >
        <label className="text-cyan-800 text-2xl" htmlFor="items">category</label>
<br></br>
        <select  className="text-1g  text-base text-blue-600 cursor-default m-4" 
        name="items" id="items">
          <option value="Ethnic">Ethnic</option>
          <option value="Western">Western</option>
          <option value="Kids">Kids</option>
          <option value="Women">Women</option>
        </select>
      </div>
      <DividerComponent />
      <div className=" m-4">
        <input className="rounded-2xl"
        type="checkbox" id="item1" name="item1" value="Men"/>
        <label className="text-1g  text-base text-blue-600 cursor-default" htmlFor="item1"> Men</label>
        <br></br>
        <input type="checkbox" id="item2" name="item2" value="Women" />
        
        <label className="text-1g  text-base text-blue-600 cursor-default" htmlFor="item2"> Women</label>
        <br></br>
        <input type="checkbox" id="item3" name="item3" value="Kids" />
        <label className="text-1g  text-base text-blue-600 cursor-default"  htmlFor="item3"> Kids</label>
        <br></br>
        <input type="checkbox" id="item4" name="item4" value="Kids" />
        <label className="text-1g  text-base text-blue-600 cursor-default" htmlFor="item4"> All</label>
      </div>
      <DividerComponent />
      <div className="flex m-4 gap-4">
      <label className="text-1g  text-base text-blue-600 cursor-default" htmlFor="price">Price Range</label>
      <input className="w-40 h-6 solid" type="range" id="price" name="price" min="500" max="10000" />
      </div>
      
      <DividerComponent />

    </div>
  );
};

export default FilterComponent;
