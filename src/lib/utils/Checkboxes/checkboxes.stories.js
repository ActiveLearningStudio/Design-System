/*eslint-disable*/
import React from "react";
import Checkboxes from "./checkboxes";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Utilities/Checkboxes",
  component: Checkboxes,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Checkboxes {...args} />;

export const CheckboxProps = Template.bind({});

CheckboxProps.args = {
  primary: true,
  secondary: false,
  disabled: false,
  icon: faTimes,
  width: "",
  height: "",
  radius: "",
  text: "text",
  type: "submit",
};
