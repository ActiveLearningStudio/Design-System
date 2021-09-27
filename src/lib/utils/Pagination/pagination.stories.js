/*eslint-disable*/
import React from "react";
import Pagination  from "./pagination";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Utilities/Pagination ",
  component: Pagination ,
};

const Template = (args) => <Pagination  {...args} />;

export const PaginationProps = Template.bind({});

PaginationProps.args = {
  isBoxes: true,
  isCircle:false,
  disabled: false,
  

};
