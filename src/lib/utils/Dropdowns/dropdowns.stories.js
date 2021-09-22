/*eslint-disable*/
import React from "react";
import Dropdowns from "./dropdowns";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const DropdownItem = [
  {
    text: "first item",
    linkName: "www.curriki.org",
    target: "_blank",
  },
  {
    text: "Second item",
    linkName: "www.curriki.org",
    target: "_blank",
  },
];
export default {
  title: "Utilities/Dropdowns",
  component: Dropdowns,
};

const Template = (args) => <Dropdowns {...args} />;

export const DropdownProps = Template.bind({});

DropdownProps.args = {
  primary: true,
  secondary: false,
  disabled: false,
  icon: faAngleDown,
  title: "Input text here",
  DropdownMenuItem: DropdownItem,
};
