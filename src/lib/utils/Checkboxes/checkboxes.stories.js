/*eslint-disable*/
import React from "react";
import Checkboxes from "./checkboxes";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Utilities/Checkboxes",
  component: Checkboxes,
};

const Template = (args) => <Checkboxes {...args} />;

export const CheckboxProps = Template.bind({});

CheckboxProps.args = {
  disabled: false,
  label: "checkbox text",
};
