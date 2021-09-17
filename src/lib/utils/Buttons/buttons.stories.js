/*eslint-disable*/
import React from "react";
import Buttons from "./buttons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Utilities/Buttons",
  component: Buttons,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Buttons {...args} />;

export const ButtonProps = Template.bind({});

ButtonProps.args = {
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
