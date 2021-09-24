/*eslint-disable*/
import React from "react";
import RadioButons from "./radiobuttons";

export default {
  title: "Utilities/RadioButons",
  component: RadioButons,
};

const Template = (args) => <RadioButons {...args} />;

export const RadioButtonProps = Template.bind({});

RadioButtonProps.args = {
  primary: true,
  secondary: false,
  disabled: false,
  label: "radio button text",
};
