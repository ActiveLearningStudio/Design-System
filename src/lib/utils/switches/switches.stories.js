/*eslint-disable*/
import React from "react";
import Switches from "./switches.js";

export default {
  title: "Utilities/Switches",
  component: Switches,
};

const Template = (args) => <Switches {...args} />;

export const SwitchesProps = Template.bind({});

SwitchesProps.args = {
  disabled: false,
};
