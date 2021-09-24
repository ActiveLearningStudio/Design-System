/*eslint-disable*/
import React from "react";
import Searches from "./searches.js";

export default {
  title: "Utilities/Searches",
  component: Searches,
};

const Template = (args) => <Searches {...args} />;

export const SearchProps = Template.bind({});

SearchProps.args = {
  Primary:true,
  Secondary:false,
  disabled: false,
  placeholder:"Search...",
  searchText:"",

};
